import Blockly from 'blockly/core';
import javascriptGenerator from '../javascriptGenerator';
import { registerBlock } from '../register';

const categoryColor = '#5C81A6';

/** @param {{ type: string }} field */
function valueCheck(field) {
    switch (field.type) {
        case 'string':
            return 'String';
        case 'number':
            return 'Number';
        case 'boolean':
            return 'Boolean';
        default:
            return null;
    }
}

/**
 * @param {Blockly.Block} block
 * @param {{ fields?: Array<{ type: string, id?: string, text?: string, default?: string }>, colour?: string, type?: string }} def
 * @param {'define' | 'execute'} mode
 */
function rebuildUserBlockShape(block, def, mode) {
    while (block.inputList && block.inputList.length > 0) {
        block.removeInput(block.inputList[0].name);
    }

    block.setOutput(false);
    block.setPreviousStatement(false);
    block.setNextStatement(false);

    if (!def || !def.fields) {
        block.setColour(categoryColor);
        block.appendDummyInput('_MISSING').appendField(Blockly.Msg.BLOCKS_CUSTOM_MISSING || '(custom block)');
        if (mode === 'define') {
            block.appendStatementInput('BLOCKS');
        } else {
            block.setPreviousStatement(true);
            block.setNextStatement(true);
        }
        return;
    }

    block.setColour(def.colour || categoryColor);

    let row = 0;
    for (const field of def.fields) {
        if (field.type === 'label') {
            block.appendDummyInput(`lbl_${field.id || row}`).appendField(field.text || '');
        } else {
            const chk = valueCheck(field);
            block.appendValueInput(field.id).setCheck(chk).appendField(field.text || field.type);
        }
        row++;
    }

    if (mode === 'define') {
        block.appendStatementInput('BLOCKS');
        return;
    }

    if (def.type === 'command') {
        block.setPreviousStatement(true);
        block.setNextStatement(true);
    } else if (def.type === 'reporter') {
        block.setOutput(true);
    } else if (def.type === 'Boolean') {
        block.setOutput(true, 'Boolean');
    } else {
        block.setPreviousStatement(true);
        block.setNextStatement(true);
    }
}

const userBlockMutation = {
    mutationToDom: function () {
        if (!this.blockId_) {
            return null;
        }
        const c = Blockly.utils.xml.createElement('mutation');
        c.setAttribute('blockId', this.blockId_);
        return c;
    },
    domToMutation: function (xmlElement) {
        this.blockId_ =
            xmlElement.getAttribute('blockId') ||
            xmlElement.getAttribute('blockid') ||
            '';
        this.updateShape_();
    },
};

function registerUserBlocks() {
    for (const name of ['blocks_define', 'blocks_execute']) {
        if (Blockly.Blocks[name]) {
            delete Blockly.Blocks[name];
        }
        if (javascriptGenerator[name]) {
            delete javascriptGenerator[name];
        }
    }

    Blockly.Blocks.blocks_define = {
        ...userBlockMutation,
        init: function () {
            this.blockId_ = '';
            this.setTooltip(Blockly.Msg.BLOCKS_DEFINE_TOOLTIP || '');
            this.setDeletable(false);
            rebuildUserBlockShape(this, null, 'define');
        },
        updateShape_: function () {
            const def =
                typeof window !== 'undefined' && window.blocks && this.blockId_
                    ? window.blocks[this.blockId_]
                    : null;
            rebuildUserBlockShape(this, def, 'define');
        },
    };

    Blockly.Blocks.blocks_execute = {
        ...userBlockMutation,
        init: function () {
            this.blockId_ = '';
            this.setTooltip(Blockly.Msg.BLOCKS_EXECUTE_TOOLTIP || '');
            rebuildUserBlockShape(this, null, 'execute');
        },
        updateShape_: function () {
            const def =
                typeof window !== 'undefined' && window.blocks && this.blockId_
                    ? window.blocks[this.blockId_]
                    : null;
            rebuildUserBlockShape(this, def, 'execute');
        },
    };

    javascriptGenerator.blocks_define = function () {
        return '';
    };

    javascriptGenerator.blocks_execute = function (block) {
        const id = block.blockId_;
        const def = typeof window !== 'undefined' && id && window.blocks ? window.blocks[id] : null;
        if (!def) {
            return '';
        }
        const parts = [];
        for (const f of def.fields) {
            if (f.type === 'label') {
                continue;
            }
            let v = javascriptGenerator.valueToCode(block, f.id);
            if (!v) {
                if (f.type === 'number') {
                    v = String(Number(f.default) || 0);
                } else if (f.type === 'boolean') {
                    v = 'false';
                } else {
                    v = JSON.stringify(f.default ?? '');
                }
            }
            parts.push(`${JSON.stringify(f.id)}: ${v}`);
        }
        const payload = `{ ${parts.join(', ')} }`;
        const call = `extension.block_${id}(${payload})`;
        if (def.type === 'command') {
            return `await ${call};\n`;
        }
        return [`await ${call}`, javascriptGenerator.ORDER_FUNCTION_CALL];
    };
}

function register() {
    registerUserBlocks();

    registerBlock('blocks_return', {
        message0: '%{BKY_BLOCKS_RETURN}',
        args0: [
            {
                type: 'input_value',
                name: 'VAL',
            },
        ],
        previousStatement: true,
        nextStatement: false,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const v = javascriptGenerator.valueToCode(block, 'VAL') || 'null';
        return `return ${v};\n`;
    });

    registerBlock('return', {
        message0: '%{BKY_GENERIC_RETURN}',
        args0: [
            {
                type: 'field_input',
                name: 'X',
                check: null,
                text: '0',
                acceptsBlocks: true,
            },
        ],
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X');
        return `return (${X})`;
    });
}

export default register;

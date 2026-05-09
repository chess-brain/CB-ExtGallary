import javascriptGenerator from '../javascriptGenerator';
import { registerBlock } from '../register';

const categoryPrefix = 'extra_';
const categoryColor = '#ff9800';

function register() {
    registerBlock(`${categoryPrefix}log`, {
        message0: '%{BKY_EXTRA_LOG}',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', 0);
        const code = `console.log(${VALUE});`;
        return code;
    })
    
    registerBlock(`${categoryPrefix}alert`, {
        message0: '%{BKY_EXTRA_ALERT}',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', 0);
        const code = `alert(${VALUE});`;
        return code;
    })
    
    registerBlock(`${categoryPrefix}prompt`, {
        message0: '%{BKY_EXTRA_PROMPT}',
        args0: [
            {
                "type": "input_value",
                "name": "MESSAGE"
            }
        ],
        output: "String",
        colour: categoryColor
    }, (block) => {
        const MESSAGE = javascriptGenerator.valueToCode(block, 'MESSAGE', 0);
        const code = `prompt(${MESSAGE})`;
        return [code, 0];
    })
    
    registerBlock(`${categoryPrefix}confirm`, {
        message0: '%{BKY_EXTRA_CONFIRM}',
        args0: [
            {
                "type": "input_value",
                "name": "MESSAGE"
            }
        ],
        output: "Boolean",
        colour: categoryColor
    }, (block) => {
        const MESSAGE = javascriptGenerator.valueToCode(block, 'MESSAGE', 0);
        const code = `confirm(${MESSAGE})`;
        return [code, 0];
    })
}

export default register;
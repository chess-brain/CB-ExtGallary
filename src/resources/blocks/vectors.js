import javascriptGenerator from '../javascriptGenerator';
import { registerBlock } from '../register';
import util from '../util';

const categoryPrefix = 'vector_';
const categoryColor = '#6cd';

function register() {
    registerBlock(`${categoryPrefix}create`, {
        message0: '%{BKY_VECT_CREATE}',
        args0: [
            {
                "type": "field_number",
                "name": "X",
                "check": "Number",
                "value": 0,
                "acceptsBlocks": true
            },
            {
                "type": "field_number",
                "name": "Y",
                "check": "Number",
                "value": 0,
                "acceptsBlocks": true
            }
        ],
        output: "Vector",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X');
        const Y = javascriptGenerator.valueToCode(block, 'Y');
        const code = `new ExtForge.Vector(${X}, ${Y})`;
        return code;
    })

    registerBlock(`${categoryPrefix}x`, {
        message0: '%{BKY_VECT_GET_X}',
        args0: [
            {
                "type": "input_value",
                "name": "VEC",
                "check": "Vector"
            },
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        const code = `(${VEC}).x`;
        return code;
    })

    registerBlock(`${categoryPrefix}y`, {
        message0: '%{BKY_VECT_GET_Y}',
        args0: [
            {
                "type": "input_value",
                "name": "VEC",
                "check": "Vector"
            },
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        const code = `(${VEC}).y`;
        return code;
    })
}

export default register;
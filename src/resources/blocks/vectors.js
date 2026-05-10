import javascriptGenerator from '../javascriptGenerator';
import { registerBlock } from '../register';

const categoryPrefix = 'vector_';
const categoryColor = '#6cd';

/** @param {string} code */
function out(code) {
    return [`${code}`, 0];
}

function register() {
    registerBlock(`${categoryPrefix}create`, {
        message0: '%{BKY_VECT_CREATE}',
        args0: [
            {
                type: 'field_number',
                name: 'X',
                check: 'Number',
                value: 0,
                acceptsBlocks: true,
            },
            {
                type: 'field_number',
                name: 'Y',
                check: 'Number',
                value: 0,
                acceptsBlocks: true,
            },
        ],
        output: 'Vector',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X');
        const Y = javascriptGenerator.valueToCode(block, 'Y');
        return out(`new ExtForge.Vector(${X}, ${Y})`);
    });

    registerBlock(`${categoryPrefix}x`, {
        message0: '%{BKY_VECT_GET_X}',
        args0: [
            {
                type: 'input_value',
                name: 'VEC',
                check: 'Vector',
            },
        ],
        output: 'Number',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        return out(`(ExtForge.Vector.from(${VEC}).x)`);
    });

    registerBlock(`${categoryPrefix}y`, {
        message0: '%{BKY_VECT_GET_Y}',
        args0: [
            {
                type: 'input_value',
                name: 'VEC',
                check: 'Vector',
            },
        ],
        output: 'Number',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        return out(`(ExtForge.Vector.from(${VEC}).y)`);
    });

    registerBlock(`${categoryPrefix}add`, {
        message0: '%{BKY_VECT_ADD}',
        args0: [
            {
                type: 'input_value',
                name: 'A',
                check: 'Vector',
            },
            {
                type: 'input_value',
                name: 'B',
                check: 'Vector',
            },
        ],
        output: 'Vector',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const A = javascriptGenerator.valueToCode(block, 'A');
        const B = javascriptGenerator.valueToCode(block, 'B');
        return out(
            `((a,b)=>new ExtForge.Vector(a.x+b.x,a.y+b.y))(ExtForge.Vector.from(${A}),ExtForge.Vector.from(${B}))`,
        );
    });

    registerBlock(`${categoryPrefix}sub`, {
        message0: '%{BKY_VECT_SUB}',
        args0: [
            {
                type: 'input_value',
                name: 'A',
                check: 'Vector',
            },
            {
                type: 'input_value',
                name: 'B',
                check: 'Vector',
            },
        ],
        output: 'Vector',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const A = javascriptGenerator.valueToCode(block, 'A');
        const B = javascriptGenerator.valueToCode(block, 'B');
        return out(
            `((a,b)=>new ExtForge.Vector(a.x-b.x,a.y-b.y))(ExtForge.Vector.from(${A}),ExtForge.Vector.from(${B}))`,
        );
    });

    registerBlock(`${categoryPrefix}scale`, {
        message0: '%{BKY_VECT_SCALE}',
        args0: [
            {
                type: 'input_value',
                name: 'VEC',
                check: 'Vector',
            },
            {
                type: 'field_number',
                name: 'S',
                check: 'Number',
                value: 1,
                acceptsBlocks: true,
            },
        ],
        output: 'Vector',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        const S = javascriptGenerator.valueToCode(block, 'S');
        return out(
            `((a,s)=>new ExtForge.Vector(a.x*s,a.y*s))(ExtForge.Vector.from(${VEC}),${S})`,
        );
    });

    registerBlock(`${categoryPrefix}length`, {
        message0: '%{BKY_VECT_LENGTH}',
        args0: [
            {
                type: 'input_value',
                name: 'VEC',
                check: 'Vector',
            },
        ],
        output: 'Number',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        return out(`((v)=>Math.hypot(v.x,v.y))(ExtForge.Vector.from(${VEC}))`);
    });

    registerBlock(`${categoryPrefix}distance`, {
        message0: '%{BKY_VECT_DISTANCE}',
        args0: [
            {
                type: 'input_value',
                name: 'A',
                check: 'Vector',
            },
            {
                type: 'input_value',
                name: 'B',
                check: 'Vector',
            },
        ],
        output: 'Number',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const A = javascriptGenerator.valueToCode(block, 'A');
        const B = javascriptGenerator.valueToCode(block, 'B');
        return out(
            `((a,b)=>Math.hypot(a.x-b.x,a.y-b.y))(ExtForge.Vector.from(${A}),ExtForge.Vector.from(${B}))`,
        );
    });

    registerBlock(`${categoryPrefix}dot`, {
        message0: '%{BKY_VECT_DOT}',
        args0: [
            {
                type: 'input_value',
                name: 'A',
                check: 'Vector',
            },
            {
                type: 'input_value',
                name: 'B',
                check: 'Vector',
            },
        ],
        output: 'Number',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const A = javascriptGenerator.valueToCode(block, 'A');
        const B = javascriptGenerator.valueToCode(block, 'B');
        return out(
            `((a,b)=>a.x*b.x+a.y*b.y)(ExtForge.Vector.from(${A}),ExtForge.Vector.from(${B}))`,
        );
    });

    registerBlock(`${categoryPrefix}normalize`, {
        message0: '%{BKY_VECT_NORMALIZE}',
        args0: [
            {
                type: 'input_value',
                name: 'VEC',
                check: 'Vector',
            },
        ],
        output: 'Vector',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const VEC = javascriptGenerator.valueToCode(block, 'VEC');
        return out(
            `((v)=>{const L=Math.hypot(v.x,v.y);return L>0?new ExtForge.Vector(v.x/L,v.y/L):new ExtForge.Vector(0,0)})(ExtForge.Vector.from(${VEC}))`,
        );
    });

    registerBlock(`${categoryPrefix}lerp`, {
        message0: '%{BKY_VECT_LERP}',
        args0: [
            {
                type: 'input_value',
                name: 'A',
                check: 'Vector',
            },
            {
                type: 'input_value',
                name: 'B',
                check: 'Vector',
            },
            {
                type: 'field_number',
                name: 'T',
                check: 'Number',
                value: 0.5,
                acceptsBlocks: true,
            },
        ],
        output: 'Vector',
        inputsInline: true,
        colour: categoryColor,
    }, (block) => {
        const A = javascriptGenerator.valueToCode(block, 'A');
        const B = javascriptGenerator.valueToCode(block, 'B');
        const T = javascriptGenerator.valueToCode(block, 'T');
        return out(
            `((a,b,t)=>new ExtForge.Vector(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))(ExtForge.Vector.from(${A}),ExtForge.Vector.from(${B}),${T})`,
        );
    });
}

export default register;

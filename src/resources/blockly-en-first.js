/**
 * Official Blockly strings must be applied before `import 'blockly/blocks'`,
 * otherwise built-in blocks register with unresolved %{BKY_*} tooltip keys.
 */
import Blockly from 'blockly/core';
import En from 'blockly/msg/en';

Object.assign(Blockly.Msg, En);

import registerGeneric from "./generic";
import registerEvents from "./events";
import registerControl from "./control";
import registerMath from "./math";
import registerStrings from "./strings";
import registerVectors from "./vectors";
import registerInputs from "./inputs";
import registerVariables from "./variables";
import registerLists from "./lists";
import registerBlocks from "./blocks";
import registerExtra from "./extra";
import registerAdvanced from "./advanced";

import registerRuntime from "./runtime";
import registerScript from "./script";
import registerMusic from "./music";

import Blockly from 'blockly/core';

// Custom block translations fallback (in case Blockly.Msg is cleared during HMR)
const customBlockTranslations = {
    BLOCKS_DEFINE_TOOLTIP: 'Define a custom block implementation.',
    BLOCKS_EXECUTE_TOOLTIP: 'Run a custom block.',
    BLOCKS_CUSTOM_MISSING: '(custom block)',
    BLOCKS_RETURN: 'return %1',
    EVENTS_LOADED: 'when extension loads',
    EVENTS_THREAD: 'run in new thread',
    EVENTS_REGBROADCAST: 'when broadcast %1 received %2',
    EVENTS_BROADCAST: 'broadcast %1',
    EVENTS_BROADCASTW: 'broadcast %1 and wait',
    RUNTIME_START: 'start project',
    RUNTIME_STOP: 'stop project',
    RUNTIME_RUNNING: 'project running?',
    RUNTIME_ONSTART: 'when project started %1 %2',
    RUNTIME_ONSTOP: 'when project stopped %1 %2',
    RUNTIME_BEFORETICK: 'before project tick %1 %2',
    RUNTIME_AFTERTICK: 'after project tick %1 %2',
    RUNTIME_TURBOGET: 'turbo mode enabled?',
    RUNTIME_TURBOSET: 'set turbo mode to %1',
    RUNTIME_FRAMEGET: 'frame rate',
    RUNTIME_FRAMESET: 'set frame rate to %1',
    RUNTIME_TIMER: 'project timer',
    RUNTIME_BROADCAST: 'broadcast project %1',
    CONTROL_IF: 'if %1 then %2 %3',
    CONTROL_ELSEIF: 'else if',
    CONTROL_ELSE: 'else',
    CONTROL_WAIT: 'wait %1 seconds',
    CONTROL_WAITFRAME: 'wait until next frame',
    CONTROL_WAITUNTIL: 'wait until %1',
    CONTROL_WHILE: 'while %1 do %2 %3',
    CONTROL_REPEAT: 'repeat %1 times %2 %3',
    CONTROL_RETURN: 'return %1',
    CONTROL_INLINE: 'inline %1 %2',
    ADVANCED_RANDOM: 'random number from %1 to %2',
    ADVANCED_POWER: '%1 to the power of %2',
    ADVANCED_LENGTH: 'length of %1',
    ADVANCED_CONCAT: 'join %1 and %2',
    ADVANCED_ARRAYLENGTH: 'length of %1',
    ADVANCED_ARRAYPUSH: 'add %1 to %2',
    ADVANCED_DATETIME: 'current date and time',
    ADVANCED_YEAR: 'year of %1',
    GENERIC_RETURN: 'return %1'
};

// Ensure custom translations exist in Blockly.Msg (HMR protection)
function ensureCustomTranslations() {
    console.log('[BLOCKS INDEX] Blockly.Msg identity:', Blockly.Msg);
    console.log('[BLOCKS INDEX] Blockly object keys:', Object.keys(Blockly).slice(0, 5));
    
    Object.entries(customBlockTranslations).forEach(([key, value]) => {
        if (!Blockly.Msg[key] || typeof Blockly.Msg[key] !== 'string') {
            console.warn(`[HMR Protection] Restoring missing translation: ${key} = "${value}"`);
            Blockly.Msg[key] = value;
        } else {
            console.log(`[HMR Protection] ${key} exists: "${Blockly.Msg[key]}"`);
        }
    });
}

export default () => {
    // CRITICAL: Ensure translations exist before registering any blocks
    // This protects against HMR clearing Blockly.Msg
    console.log('[BLOCKS INDEX] ensureCustomTranslations called');
    ensureCustomTranslations();
    
    console.log('[BLOCKS INDEX] Before registerGeneric, EVENTS_LOADED =', Blockly.Msg.EVENTS_LOADED);
    registerGeneric();
    console.log('[BLOCKS INDEX] After registerGeneric');
    
    console.log('[BLOCKS INDEX] Before registerEvents, EVENTS_LOADED =', Blockly.Msg.EVENTS_LOADED);
    registerEvents();
    console.log('[BLOCKS INDEX] After registerEvents');
    
    registerControl();
    registerMath();
    registerStrings();
    registerVectors();
    registerInputs();
    registerVariables();
    registerLists();
    registerBlocks();
    registerExtra();
    registerAdvanced();

    registerRuntime();
    registerScript();
    registerMusic();
    
    console.log('[BLOCKS INDEX] All blocks registered');
}
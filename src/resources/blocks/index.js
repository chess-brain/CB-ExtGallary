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
import enUS from '../../i18n/en-US.js';

/** 与 UI 语言包一致；HMR 清空 Blockly.Msg 时从这里恢复 */
const customBlockTranslations = { ...enUS.blocks };

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
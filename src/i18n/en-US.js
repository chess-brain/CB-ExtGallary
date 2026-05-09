// English (US) translations
export default {
  languageName: 'English (US)',
  // Navigation
  nav: {
    export: 'Export',
    load: 'Load',
    reset: 'Reset',
    saveDraft: 'Save Draft',
    restoreDraft: 'Restore Draft',
    experiments: 'Experiments',
    language: 'Language',
    discord: 'Discord',
    qq: 'QQ',
    settings: 'Settings'
  },
  // Tabs
  tabs: {
    editor: 'Editor',
    display: 'Properties & Blocks',
    settings: 'Settings',
    debugger: 'Debugger'
  },
  // Editor
  editor: {
    searchBlocks: 'Search blocks by text or type...',
    search: 'Search',
    prev: 'Prev',
    next: 'Next'
  },
  // Properties
  properties: {
    projectName: 'Project Name',
    projectId: 'Project ID',
    projectColor: 'Project Color',
    id: 'ID',
    color: 'Color',
    defaultId: 'extensionID',
    defaultExtensionName: 'Extension'
  },
  // Settings
  settings: {
    general: 'General',
    editor: 'Editor',
    export: 'Export',
    darkMode: 'Dark Mode',
    minifyCode: 'Minify Code',
    includeComments: 'Include Comments',
    hideNavLogo: 'Hide top bar logo',
    navLogoOnNarrow: 'Show logo on narrow screens'
  },
  // Export
  export: {
    exportProject: 'Export project',
    exportOptions: 'Export options',
    exportAsJS: 'Export as JS',
    exportAsEXF: 'Export as EXF',
    exportAsJSDesc: 'Download as a single .js file',
    exportAsEXFDesc: 'Download project package as .exf',
    copyCode: 'Copy Code',
    copyCodeDesc: 'Copy generated code to clipboard',
    exportInformation: 'Information',
    exportInfoText:
      'EXF archives contain project data and generated JavaScript for backup or sharing.',
    exportModalTitle: 'Export Options',
    codeCopied: 'Code copied to clipboard.',
    copyFailed: 'Failed to copy code.'
  },
  // Debugger
  debugger: {
    source: 'Preview environment URL',
    openInNewTab: 'Open in New Tab',
    copyUrl: 'Copy extension URL',
    urlCopied: 'Copied to clipboard',
    extensionUrl: 'Extension code URL (Data URI)',
    debuggerNote:
      'The address below updates live from generated JS. Paste it into the preview environment to load your extension.',
    lastDraftAutoSave: 'Last draft auto-saved',
    notYet: 'None yet',
    recentFiles: 'Recent Files',
    importedExtension: 'Current extension'
  },
  // Messages
  messages: {
    draftSaved: 'Draft saved.',
    noDraftFound: 'No draft found.',
    draftRestoreFailed: 'Draft restore failed.',
    errorExportingEXF: 'Error exporting EXF:',
    failedToExportEXF: 'Failed to export EXF file.',
    resetConfirm: 'Reset the current project? This will clear all blocks and custom data.',
    deleteBlockConfirm: 'Are you sure you want to delete this block?',
    testingFeature: 'Testing this feature!',
    searchNoResults: 'No blocks matched this query.',
    importFailedPrefix: 'Import failed:',
    unknownError: 'Unknown error',
    importMissingProjectJson: 'Missing data/project.json',
    exportReadmeTitle: 'README.txt',
    exportReadmeBody:
      'This package is not meant to be opened manually.\nBe careful — you can permanently break your extension!',
    exportFailedAlert: 'Export failed.'
  },
  /** Toolbox sidebar category labels (Blockly XML name=) */
  toolboxCat: {
    events: 'Events',
    control: 'Control',
    math: 'Math',
    strings: 'Strings',
    vectors: 'Vectors',
    inputs: 'Inputs',
    variables: 'Variables',
    lists: 'Lists',
    lambdas: 'Lambdas',
    blocks: 'Blocks',
    runtime: 'Runtime',
    targets: 'Targets',
    browser: 'Browser',
    music: 'Music',
    search: 'Search',
    favorites: 'Favorites'
  },
  /** Flyout buttons & prompts (toolbox callbacks) */
  toolbox: {
    registerVariable: 'Register variable',
    removeVariable: 'Remove variable',
    searchSetKeyword: 'Set search keyword',
    searchActive: 'Search: %1 (click to change)',
    searchClear: 'Clear search',
    favoritesAddSelected: 'Add selected block to favorites',
    favoritesRemoveByType: 'Remove favorite by block type',
    favoritesClear: 'Clear favorites',
    selectBlockFirst: 'Select a block in the editor first.',
    noFavoritesYet: 'No favorites yet.',
    removeFavoritePrompt: 'Enter block type to remove',
    clearFavoritesConfirm: 'Clear all favorite blocks?',
    variablesRemovePrompt: 'Variable name to remove',
    searchKeywordPrompt: 'Search block types by keyword'
  },
  /** Custom blocks editor UI (not merged into Blockly.Msg) */
  blocksUi: {
    editBlock: 'Edit block',
    fieldType: 'Type',
    fieldText: 'Text',
    label: 'Label',
    string: 'String',
    number: 'Number',
    boolean: 'Boolean',
    defaultValue: 'Default',
    delete: 'Delete',
    addField: 'Add field',
    command: 'Command',
    reporter: 'Reporter',
    confirmCreate: 'Create this block?',
    confirmDelete: 'Delete this block?',
    blockColorPrompt: 'Enter a color for this block (hex):',
    edit: 'Edit',
    color: 'Color',
    noBlocks: 'No custom blocks yet.',
    createBlockAria: 'Create custom block'
  },
  blockly: {
    loadingToolbox: 'Loading…'
  },
  variables: {
    registerVariable: 'Register variable',
    variableName: 'Variable name',
    unknown: 'Any type',
    list: 'List',
    vector: 'Vector',
    register: 'Register',
    typeString: 'String',
    typeNumber: 'Number',
    typeBoolean: 'Boolean'
  },
  experiments: {
    title: 'Experiments',
    debuggerAdded: 'Debugger tab added.',
    debuggerDesc: 'Use the Debugger tab to open your extension in the preview environment.',
    moreLanguages: 'More languages may be added later.'
  },
  compiler: {
    unsandboxedRequired: 'This extension needs to be unsandboxed to run!'
  },
  // Blockly Block Translations
  blocks: {
    BLOCKS_DEFINE_TOOLTIP: 'Define a custom block implementation.',
    BLOCKS_EXECUTE_TOOLTIP: 'Run a custom block.',
    BLOCKS_CUSTOM_MISSING: '(custom block)',
    BLOCKS_RETURN: 'return %1',
    // Events
    EVENTS_LOADED: 'when extension loads',
    EVENTS_THREAD: 'run in new thread',
    EVENTS_REGBROADCAST: 'when broadcast %1 received %2',
    EVENTS_BROADCAST: 'broadcast %1',
    EVENTS_BROADCASTW: 'broadcast %1 and wait',
    // Runtime
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
    // Control
    CONTROL_IF: 'if %1 then %2 %3',
    CONTROL_ELSEIF: 'else if',
    CONTROL_ELSE: 'else',
    CONTROL_THEN: 'then',
    CONTROL_WAIT: 'wait %1 seconds',
    CONTROL_WAITFRAME: 'wait until next frame',
    CONTROL_WAITUNTIL: 'wait until %1',
    CONTROL_WHILE: 'while %1 do %2 %3',
    CONTROL_REPEAT: 'repeat %1 times %2 %3',
    CONTROL_RETURN: 'return %1',
    CONTROL_INLINE: 'inline %1 %2',
    // Advanced
    ADVANCED_RANDOM: 'random number between %1 and %2',
    ADVANCED_POWER: '%1 to the power of %2',
    ADVANCED_LENGTH: 'length of %1',
    ADVANCED_CONCAT: 'concatenate %1 and %2',
    ADVANCED_ARRAYLENGTH: 'length of array %1',
    ADVANCED_ARRAYPUSH: 'push %1 to array %2',
    ADVANCED_DATETIME: 'current date and time',
    ADVANCED_YEAR: 'year of %1',
    // Generic
    GENERIC_RETURN: 'return %1',

    CONTROL_WAIT_ONE_FRAME: 'wait 1 frame',
    CONTROL_MUTATOR_IF: 'if',
    CONTROL_MUTATOR_ELSEIF: 'else if',
    CONTROL_MUTATOR_ELSE: 'else',

    MATH_ADD: '%1 + %2',
    MATH_SUB: '%1 - %2',
    MATH_MUL: '%1 × %2',
    MATH_DIV: '%1 ÷ %2',
    MATH_POW: '%1 ^ %2',
    MATH_MOD: '%1 % %2',
    MATH_LOG: 'log %1 %2',
    MATH_TRUE: 'true',
    MATH_FALSE: 'false',
    MATH_RANDOM_BOOL: 'random',
    MATH_AND: '%1 and %2',
    MATH_XOR: '%1 xor %2',
    MATH_OR: '%1 or %2',
    MATH_NOT: 'not %1',
    MATH_EQUALS: '%1 = %2',
    MATH_GTE: '%1 >= %2',
    MATH_GT: '%1 > %2',
    MATH_LT: '%1 < %2',
    MATH_LTE: '%1 <= %2',
    MATH_PICK_RANDOM: 'pick random %1 to %2',
    MATH_FN: '%1 of %2',
    MATH_CLAMP: 'clamp %1 between %2 and %3',

    STRINGS_JOIN_LABEL: 'join',
    STRINGS_ITEM_LABEL: 'item',
    STRINGS_EMPTY_STRING: 'empty string',
    STRINGS_REPEAT: 'repeat %1 %2 times',
    STRINGS_SPLIT: 'split %1 with delimiter %2',
    STRINGS_LENGTH: 'length of %1',
    STRINGS_SUBSTRING: 'substring %1 to %2 of %3',
    STRINGS_COMPARE: '%1 %2 %3',
    STRINGS_LOG: 'log %1',
    STRINGS_AMOUNT: 'amount of %1 in %2',
    STRINGS_REPLACE: 'replace %1 in %2 with %3',
    STRINGS_TRIM: 'trim %1',
    STRINGS_CASE: '%1 case of %2',
    STRINGS_MATCH: '%1 matches regex %2 flags %3',

    LISTS_LIST: 'list',
    LISTS_ITEM: 'item',
    LISTS_CREATE_EMPTY: 'create empty list',
    LISTS_CREATE_WITH: 'create list with',
    LISTS_GET: 'get item %1 of %2',
    LISTS_INDEX: 'index of %1 in %2',
    LISTS_CONTAINS: '%1 contains %2',
    LISTS_SET: 'set item %1 of %2 to %3',
    LISTS_LENGTH: 'length of %1',
    LISTS_JOIN: 'join %1 with delimiter %2',
    LISTS_CONCAT: 'concat %1 with %2',
    LISTS_UNIQUE: 'unique values of %1',
    LISTS_SORT: 'sort %1 mode %2',
    LISTS_FILTER: 'filter %1 contains %2',
    LISTS_FOREACH: 'for each %1 %2 in %3 %4 %5',
    LISTS_FOREACH_INDEX: 'index',
    LISTS_FOREACH_VALUE: 'value',

    INPUTS_KEY_PRESS: 'is key %1 pressed?',
    INPUTS_KEYS_PRESSED: 'keys pressed',
    INPUTS_MOUSE_X: 'mouse x',
    INPUTS_MOUSE_Y: 'mouse y',
    INPUTS_MOUSE_DOWN: 'mouse down',

    VECT_CREATE: 'vector x: %1 y: %2',
    VECT_GET_X: '%1 x',
    VECT_GET_Y: '%1 y',

    VAR_SET_TO: 'set %1 to %2',

    SCRIPT_EVAL: 'eval %1',

    MUSIC_TONE: 'play tone %1 Hz for %2 ms',
    MUSIC_STOP: 'stop all sounds',
    MUSIC_SET_VOLUME: 'set music volume to %1 %%',
    MUSIC_VOLUME: 'music volume',
    MUSIC_SET_TEMPO: 'set tempo to %1 bpm',
    MUSIC_TEMPO: 'tempo (bpm)',
    MUSIC_NOTE: 'play note %1 for %2 beats',
    MUSIC_REST: 'rest for %1 beats',

    EXTRA_LOG: 'log %1',
    EXTRA_ALERT: 'alert %1',
    EXTRA_PROMPT: 'prompt %1',
    EXTRA_CONFIRM: 'confirm %1'
  }
};

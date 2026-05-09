// 中文（简体）翻译
export default {
  languageName: '中文（简体）',
  // 导航
  nav: {
    export: '导出',
    load: '加载',
    reset: '重置',
    saveDraft: '存稿',
    restoreDraft: '恢复',
    experiments: '实验',
    language: '语言',
    discord: 'Discord',
    qq: 'QQ',
    settings: '设置'
  },
  // 标签页
  tabs: {
    editor: '编辑器',
    display: '属性与积木',
    settings: '设置',
    debugger: '调试器'
  },
  // 编辑器
  editor: {
    searchBlocks: '按文本或类型搜索积木...',
    search: '搜索',
    prev: '上一个',
    next: '下一个'
  },
  // 属性
  properties: {
    projectName: '项目名称',
    projectId: '项目ID',
    projectColor: '项目颜色',
    id: 'ID',
    color: '颜色',
    defaultId: 'extensionID',
    defaultExtensionName: '扩展'
  },
  // 设置
  settings: {
    general: '常规',
    editor: '编辑器',
    export: '导出',
    darkMode: '深色模式',
    minifyCode: '压缩代码',
    includeComments: '包含注释',
    hideNavLogo: '隐藏顶部栏 Logo',
    navLogoOnNarrow: '窄屏仍显示 Logo'
  },
  // 导出
  export: {
    exportProject: '导出项目',
    exportOptions: '导出选项',
    exportAsJS: '导出为 JS',
    exportAsEXF: '导出为 EXF',
    exportAsJSDesc: '下载为单个 .js 文件',
    exportAsEXFDesc: '下载项目包（.exf）',
    copyCode: '复制代码',
    copyCodeDesc: '将生成的代码复制到剪贴板',
    exportInformation: '说明',
    exportInfoText:
      'EXF 内含项目数据与生成的 JavaScript，可用于备份或在其他设备上继续编辑。',
    exportModalTitle: '导出选项',
    codeCopied: '代码已复制到剪贴板。',
    copyFailed: '复制代码失败。'
  },
  // 调试器
  debugger: {
    source: '预览环境地址',
    openInNewTab: '在新标签页中打开',
    copyUrl: '复制扩展地址',
    urlCopied: '已复制到剪贴板',
    extensionUrl: '扩展代码地址（Data URI）',
    debuggerNote:
      '下方地址会根据当前生成的 JS 实时更新。在新标签页打开预览环境后，可粘贴该地址加载扩展。',
    lastDraftAutoSave: '上次自动保存草稿',
    notYet: '尚无',
    recentFiles: '最近文件',
    importedExtension: '当前扩展'
  },
  // 消息
  messages: {
    draftSaved: '草稿已保存。',
    noDraftFound: '未找到草稿。',
    draftRestoreFailed: '草稿恢复失败。',
    errorExportingEXF: '导出EXF时出错:',
    failedToExportEXF: '导出EXF文件失败。',
    resetConfirm: '重置当前项目？这将清除所有积木和自定义数据。',
    deleteBlockConfirm: '确定要删除这个积木吗？',
    testingFeature: '测试此功能！',
    searchNoResults: '没有匹配的积木。',
    importFailedPrefix: '导入失败：',
    unknownError: '未知错误',
    importMissingProjectJson: '缺少 data/project.json',
    exportReadmeTitle: 'README.txt',
    exportReadmeBody:
      '请勿手动打开此压缩包内的文件。\n操作不当可能导致扩展永久损坏！',
    exportFailedAlert: '导出失败。'
  },
  toolboxCat: {
    events: '事件',
    control: '控制',
    math: '运算',
    strings: '字符串',
    vectors: '向量',
    inputs: '输入',
    variables: '变量',
    lists: '列表',
    lambdas: '函数',
    blocks: '积木',
    runtime: '运行时',
    targets: '目标',
    browser: '浏览器',
    music: '音乐',
    search: '搜索',
    favorites: '收藏'
  },
  toolbox: {
    registerVariable: '注册变量',
    removeVariable: '删除变量',
    searchSetKeyword: '设置搜索关键词',
    searchActive: '搜索：%1（点击修改）',
    searchClear: '清除搜索',
    favoritesAddSelected: '将选中积木加入收藏',
    favoritesRemoveByType: '按类型移除收藏',
    favoritesClear: '清空收藏',
    selectBlockFirst: '请先在编辑器中选中一块积木。',
    noFavoritesYet: '暂无收藏。',
    removeFavoritePrompt: '输入要移除的积木类型',
    clearFavoritesConfirm: '清空所有收藏的积木类型？',
    variablesRemovePrompt: '要删除的变量名称',
    searchKeywordPrompt: '按关键词搜索积木类型'
  },
  blocksUi: {
    editBlock: '编辑积木',
    fieldType: '类型',
    fieldText: '文本',
    label: '标签',
    string: '字符串',
    number: '数字',
    boolean: '布尔',
    defaultValue: '默认值',
    delete: '删除',
    addField: '添加字段',
    command: '命令',
    reporter: '报告器',
    confirmCreate: '确定创建该积木？',
    confirmDelete: '确定删除该积木？',
    blockColorPrompt: '输入该积木的颜色（十六进制）：',
    edit: '编辑',
    color: '颜色',
    noBlocks: '暂无自定义积木。',
    createBlockAria: '创建自定义积木'
  },
  blockly: {
    loadingToolbox: '加载中…'
  },
  variables: {
    registerVariable: '注册变量',
    variableName: '变量名',
    unknown: '任意类型',
    list: '列表',
    vector: '向量',
    register: '注册',
    typeString: '字符串',
    typeNumber: '数字',
    typeBoolean: '布尔'
  },
  experiments: {
    title: '实验功能',
    debuggerAdded: '已添加调试器标签页。',
    debuggerDesc: '在「调试器」标签页中可在预览环境中运行扩展。',
    moreLanguages: '后续可能会增加更多语言。'
  },
  compiler: {
    unsandboxedRequired: '该扩展需要在非沙箱（unsandboxed）模式下运行！'
  },
  // Blockly积木翻译
  blocks: {
    BLOCKS_DEFINE_TOOLTIP: '定义自定义积木的实现。',
    BLOCKS_EXECUTE_TOOLTIP: '运行自定义积木。',
    BLOCKS_CUSTOM_MISSING: '（自定义积木）',
    BLOCKS_RETURN: '返回 %1',
    // 事件
    EVENTS_LOADED: '当扩展加载时',
    EVENTS_THREAD: '在新线程中执行',
    EVENTS_REGBROADCAST: '当收到广播 %1 时 %2',
    EVENTS_BROADCAST: '广播 %1',
    EVENTS_BROADCASTW: '广播 %1 并等待',
    // 运行时
    RUNTIME_START: '启动项目',
    RUNTIME_STOP: '停止项目',
    RUNTIME_RUNNING: '项目运行中？',
    RUNTIME_ONSTART: '当项目启动时 %1 %2',
    RUNTIME_ONSTOP: '当项目停止时 %1 %2',
    RUNTIME_BEFORETICK: '在项目刻之前 %1 %2',
    RUNTIME_AFTERTICK: '在项目刻之后 %1 %2',
    RUNTIME_TURBOGET: '加速模式已启用？',
    RUNTIME_TURBOSET: '将加速模式设置为 %1',
    RUNTIME_FRAMEGET: '帧率',
    RUNTIME_FRAMESET: '将帧率设置为 %1',
    RUNTIME_TIMER: '项目计时器',
    RUNTIME_BROADCAST: '广播项目 %1',
    // 控制
    CONTROL_IF: '如果 %1 那么 %2 %3',
    CONTROL_ELSEIF: '否则如果',
    CONTROL_ELSE: '否则',
    CONTROL_THEN: '那么',
    CONTROL_WAIT: '等待 %1 秒',
    CONTROL_WAITFRAME: '等待直到下一帧',
    CONTROL_WAITUNTIL: '等待直到 %1',
    CONTROL_WHILE: '当 %1 成立时重复执行 %2 %3',
    CONTROL_REPEAT: '重复 %1 次 %2 %3',
    CONTROL_RETURN: '返回 %1',
    CONTROL_INLINE: '内联 %1 %2',
    // 高级
    ADVANCED_RANDOM: '随机数从 %1 到 %2',
    ADVANCED_POWER: '%1 的 %2 次方',
    ADVANCED_LENGTH: '%1 的长度',
    ADVANCED_CONCAT: '连接 %1 和 %2',
    ADVANCED_ARRAYLENGTH: '数组 %1 的长度',
    ADVANCED_ARRAYPUSH: '将 %1 添加到数组 %2',
    ADVANCED_DATETIME: '当前日期和时间',
    ADVANCED_YEAR: '%1 的年份',
    // 通用
    GENERIC_RETURN: '返回 %1',

    CONTROL_WAIT_ONE_FRAME: '等待 1 帧',
    CONTROL_MUTATOR_IF: '如果',
    CONTROL_MUTATOR_ELSEIF: '否则如果',
    CONTROL_MUTATOR_ELSE: '否则',

    MATH_ADD: '%1 + %2',
    MATH_SUB: '%1 − %2',
    MATH_MUL: '%1 × %2',
    MATH_DIV: '%1 ÷ %2',
    MATH_POW: '%1 ^ %2',
    MATH_MOD: '%1 除以 %2 的余数',
    MATH_LOG: '以 %1 为底 %2 的对数',
    MATH_TRUE: '真',
    MATH_FALSE: '假',
    MATH_RANDOM_BOOL: '随机布尔',
    MATH_AND: '%1 且 %2',
    MATH_XOR: '%1 异或 %2',
    MATH_OR: '%1 或 %2',
    MATH_NOT: '非 %1',
    MATH_EQUALS: '%1 = %2',
    MATH_GTE: '%1 ≥ %2',
    MATH_GT: '%1 > %2',
    MATH_LT: '%1 < %2',
    MATH_LTE: '%1 ≤ %2',
    MATH_PICK_RANDOM: '在 %1 到 %2 之间随机取值',
    MATH_FN: '对 %2 应用函数 %1',
    MATH_CLAMP: '将 %1 限制在 %2 与 %3 之间',

    STRINGS_JOIN_LABEL: '拼接',
    STRINGS_ITEM_LABEL: '项',
    STRINGS_EMPTY_STRING: '空字符串',
    STRINGS_REPEAT: '将 %1 重复 %2 次',
    STRINGS_SPLIT: '用分隔符 %2 拆分 %1',
    STRINGS_LENGTH: '%1 的长度',
    STRINGS_SUBSTRING: '%3 的子串 %1 到 %2',
    STRINGS_COMPARE: '%1 %2 %3',
    STRINGS_LOG: '输出日志 %1',
    STRINGS_AMOUNT: '%2 中 %1 的个数',
    STRINGS_REPLACE: '将 %2 中的 %1 替换为 %3',
    STRINGS_TRIM: '去除 %1 两端空白',
    STRINGS_CASE: '%2 的 %1 大小写',
    STRINGS_MATCH: '%1 匹配正则 %2 标志 %3',

    LISTS_LIST: '列表',
    LISTS_ITEM: '项',
    LISTS_CREATE_EMPTY: '创建空列表',
    LISTS_CREATE_WITH: '创建列表，项为',
    LISTS_GET: '列表 %2 的第 %1 项',
    LISTS_INDEX: '%2 中 %1 的位置',
    LISTS_CONTAINS: '%1 是否包含 %2',
    LISTS_SET: '将列表 %2 的第 %1 项设为 %3',
    LISTS_LENGTH: '%1 的长度',
    LISTS_JOIN: '用分隔符 %2 连接 %1',
    LISTS_CONCAT: '将 %1 与 %2 拼接',
    LISTS_UNIQUE: '%1 去重',
    LISTS_SORT: '将 %1 排序，模式 %2',
    LISTS_FILTER: '筛选 %1 中包含 %2 的项',
    LISTS_FOREACH: '对 %3 逐项 %4 %5：%1 %2',
    LISTS_FOREACH_INDEX: '索引',
    LISTS_FOREACH_VALUE: '值',

    INPUTS_KEY_PRESS: '按键 %1 是否按下？',
    INPUTS_KEYS_PRESSED: '当前按下的键',
    INPUTS_MOUSE_X: '鼠标 x',
    INPUTS_MOUSE_Y: '鼠标 y',
    INPUTS_MOUSE_DOWN: '鼠标按下',

    VECT_CREATE: '向量 x：%1 y：%2',
    VECT_GET_X: '%1 的 x',
    VECT_GET_Y: '%1 的 y',

    VAR_SET_TO: '将 %1 设为 %2',

    SCRIPT_EVAL: '执行脚本 %1',

    MUSIC_TONE: '播放音调 %1 赫兹，持续 %2 毫秒',
    MUSIC_STOP: '停止所有声音',
    MUSIC_SET_VOLUME: '将音量设为 %1 %%',
    MUSIC_VOLUME: '当前音量',
    MUSIC_SET_TEMPO: '将节拍设为每分钟 %1 拍',
    MUSIC_TEMPO: '节拍（bpm）',
    MUSIC_NOTE: '演奏音符 %1，时值 %2 拍',
    MUSIC_REST: '休止 %1 拍',

    EXTRA_LOG: '控制台输出 %1',
    EXTRA_ALERT: '警告框 %1',
    EXTRA_PROMPT: '输入框 %1',
    EXTRA_CONFIRM: '确认框 %1'
  }
};

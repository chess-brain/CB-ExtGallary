// 中文（简体）翻译
export default {
  languageName: '中文（简体）',
  // 导航
  nav: {
    export: '导出',
    load: '加载',
    reset: '重置',
    saveDraft: '保存草稿',
    restoreDraft: '恢复草稿',
    experiments: '实验',
    language: '语言',
    discord: 'Discord',
    qq: 'QQ',
    settings: '设置'
  },
  // 标签页
  tabs: {
    editor: '编辑器',
    display: '显示',
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
    includeComments: '包含注释'
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
    exportInfoText: 'EXF 压缩包内含 project.json 与扩展脚本，便于备份或分享。',
    exportModalTitle: '导出选项',
    codeCopied: '代码已复制到剪贴板。',
    copyFailed: '复制代码失败。'
  },
  // 调试器
  debugger: {
    source: '源代码',
    openInNewTab: '在新标签页中打开',
    copyUrl: '复制URL',
    urlCopied: 'URL已复制!',
    extensionUrl: '扩展URL',
    debuggerNote: '调试器现在直接在新窗口中打开，以进行稳定测试。',
    lastDraftAutoSave: '上次草稿自动保存',
    notYet: '尚未',
    recentFiles: '最近文件',
    importedExtension: '已导入的扩展'
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
    GENERIC_RETURN: '返回 %1'
  }
};

/**
 * 自定义积木：补全画布上的 blocks_define，并在 window.blocks 变更后刷新工具箱「Blocks」分类。
 */

/**
 * 为 window.blocks 中尚未出现在工作区里的每项放置一块 `blocks_define`（帽形定义积木）。
 * @param {import('blockly').Workspace} workspace
 */
export function ensureCustomDefineBlocks(workspace) {
    if (!workspace || typeof window === 'undefined' || !window.blocks) return;

    const seen = new Set();
    for (const b of workspace.getAllBlocks(false)) {
        if (b.type === 'blocks_define' && b.blockId_) {
            seen.add(b.blockId_);
        }
    }

    let added = 0;
    for (const id of Object.keys(window.blocks)) {
        if (seen.has(id)) continue;

        const defineBlock = workspace.newBlock('blocks_define');
        defineBlock.setDeletable(false);
        defineBlock.blockId_ = id;
        defineBlock.updateShape_();

        try {
            if (typeof document !== 'undefined') {
                defineBlock.initSvg();
                defineBlock.render();
            }
            defineBlock.moveBy(32, 40 + added * 36);
            added++;
        } catch (e) {
            console.warn('ensureCustomDefineBlocks:', e);
        }
    }
}

/**
 * 刷新工具箱，使 custom「blocks」分类重新执行回调（读取最新的 window.blocks）。
 * @param {import('blockly').WorkspaceSvg} workspace
 */
export function refreshBlocksToolbox(workspace) {
    if (!workspace || typeof workspace.getToolbox !== 'function') return;
    try {
        const toolbox = workspace.getToolbox();
        if (!toolbox) return;

        if (typeof toolbox.refreshSelection === 'function') {
            toolbox.refreshSelection();
        }
        const flyout = typeof toolbox.getFlyout === 'function' ? toolbox.getFlyout() : null;
        if (flyout && typeof flyout.reflow === 'function') {
            flyout.reflow();
        }
    } catch (e) {
        console.warn('refreshBlocksToolbox:', e);
    }
}

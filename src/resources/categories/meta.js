import Blockly from "blockly/core";
import * as i18n from '../../i18n';

const SEARCH_STORAGE_KEY = "extforge_toolbox_search_v1";
const FAVORITES_STORAGE_KEY = "extforge_toolbox_favorites_v1";

const createExtendableElement = (type) => {
    const element = document.createElement(type);
    const _setAttribute = element.setAttribute;
    const _setAttributeNS = element.setAttributeNS;

    element.setAttribute = (...args) => {
        _setAttribute.call(element, ...args);
        return element;
    };
    element.setAttributeNS = (...args) => {
        _setAttributeNS.call(element, ...args);
        return element;
    };

    return element;
};

function getSearchTerm() {
    try {
        return localStorage.getItem(SEARCH_STORAGE_KEY) || "";
    } catch {
        return "";
    }
}

function getFavorites() {
    try {
        const data = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

function isVisibleBlockType(type) {
    if (!type) return false;
    if (type.includes("mutator")) return false;
    if (type.includes("foreache")) return false;
    return true;
}

export default (workspace) => {
    workspace.registerToolboxCategoryCallback("search", () => {
        const blockList = [];
        const term = getSearchTerm();
        const allTypes = Object.keys(Blockly.Blocks).filter(isVisibleBlockType);
        const filtered = term
            ? allTypes.filter((type) => type.toLowerCase().includes(term.toLowerCase()))
            : allTypes;

        blockList.push(createExtendableElement("button")
            .setAttribute(
                "text",
                term
                    ? i18n.t('toolbox.searchActive').replace('%1', term)
                    : i18n.t('toolbox.searchSetKeyword'),
            )
            .setAttribute("callbackkey", "search_set"));

        if (term) {
            blockList.push(createExtendableElement("button")
                .setAttribute("text", i18n.t('toolbox.searchClear'))
                .setAttribute("callbackkey", "search_clear"));
        }

        blockList.push(createExtendableElement("sep").setAttribute("gap", "24"));
        for (const type of filtered.slice(0, 120)) {
            blockList.push(createExtendableElement("block").setAttribute("type", type));
        }
        return blockList;
    });

    workspace.registerToolboxCategoryCallback("favorites", () => {
        const blockList = [];
        const favorites = getFavorites().filter((type) => Blockly.Blocks[type]);

        blockList.push(createExtendableElement("button")
            .setAttribute("text", i18n.t('toolbox.favoritesAddSelected'))
            .setAttribute("callbackkey", "favorites_add_selected"));
        blockList.push(createExtendableElement("button")
            .setAttribute("text", i18n.t('toolbox.favoritesRemoveByType'))
            .setAttribute("callbackkey", "favorites_remove_by_type"));

        if (favorites.length > 0) {
            blockList.push(createExtendableElement("button")
                .setAttribute("text", i18n.t('toolbox.favoritesClear'))
                .setAttribute("callbackkey", "favorites_clear"));
            blockList.push(createExtendableElement("sep").setAttribute("gap", "24"));
            for (const type of favorites) {
                blockList.push(createExtendableElement("block").setAttribute("type", type));
            }
        }

        return blockList;
    });
};


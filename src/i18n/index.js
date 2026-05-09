// 语言管理文件
import { writable } from 'svelte/store';
import enUS from './en-US.js';
import zhCN from './zh-CN.js';

const languages = {
  'en-US': enUS,
  'zh-CN': zhCN
};

/** @param {string} code */
function isSupported(code) {
  return Boolean(code && languages[code]);
}

/** 浏览器首屏与模块状态一致（避免仅模块变量时 Svelte 无法订阅刷新） */
function readStoredLanguage() {
  if (typeof localStorage === 'undefined') return 'en-US';
  try {
    const s = localStorage.getItem('extforge_language');
    if (isSupported(s)) return s;
  } catch {}
  return 'en-US';
}

let currentLanguage = readStoredLanguage();

/** 与 currentLanguage 同步；组件内用 `$: currentLanguage = $locale` + `t()` 读 `currentLanguage` 即可刷新导航/标签 */
export const locale = writable(currentLanguage);

let listeners = [];

export function addLanguageChangeListener(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function notifyLanguageChange() {
  listeners.forEach((listener) => listener(currentLanguage));
}

export function getLanguage() {
  return currentLanguage;
}

export function setLanguage(lang) {
  if (languages[lang]) {
    currentLanguage = lang;
    locale.set(lang);
    try {
      localStorage.setItem('extforge_language', lang);
    } catch {}
    notifyLanguageChange();
    return true;
  }
  return false;
}

export function t(key) {
  const lang = languages[currentLanguage];
  const enLang = languages['en-US'];

  const keys = key.split('.');
  let value = lang;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      value = undefined;
      break;
    }
  }

  if (value === undefined) {
    value = enLang;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }
  }

  return value !== undefined ? value : key;
}

export function initLanguage() {
  const savedLang = localStorage.getItem('extforge_language');
  if (isSupported(savedLang)) {
    currentLanguage = savedLang;
  } else {
    currentLanguage = 'en-US';
    try {
      localStorage.setItem('extforge_language', 'en-US');
    } catch {}
  }
  locale.set(currentLanguage);
  notifyLanguageChange();
}

export function getAvailableLanguages() {
  return Object.keys(languages).map((code) => ({
    code,
    name: languages[code].languageName || code
  }));
}

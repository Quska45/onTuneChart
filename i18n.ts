import { derived, writable, Writable, Readable } from 'svelte/store';
import translations from './translations';

type TranslationVars = Record<string, unknown>;

type TranslationFunction = (key: string, vars?: TranslationVars) => string;

type LocaleStore = Writable<string>;
type Locales = string[];

export const locale: LocaleStore = writable('en');
export const locales: Locales = Object.keys(translations) as Locales;

function translate(locale: string, key: string, vars: TranslationVars): string {
    if (!key) throw new Error('no key provided to $t()');
    if (!locale) throw new Error(`no translation for key "${key}"`);

    const text = translations[locale]?.[key];

    if (!text) throw new Error(`no translation found for ${locale}.${key}`);

    let result = text;
    for (const k in vars) {
        const regex = new RegExp(`{{${k}}}`, 'g');
        result = result.replace(regex, vars[k] as string);
    }

    return result;
}

export const t: Readable<TranslationFunction> = derived(
    locale,
    ($locale) =>
        (key: string, vars: TranslationVars = {}): string =>
            translate($locale, key, vars),
);

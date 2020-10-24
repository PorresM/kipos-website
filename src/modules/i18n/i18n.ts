import { createI18n } from "vue-i18n";
import en from "@/modules/i18n/en.json";
import fr from "@/modules/i18n/fr.json";

enum Locales {
    EN = 'en',
    FR = 'fr',
}

const messages = {
    [Locales.EN]: en,
    [Locales.FR]: fr
};

const defaultLocale = Locales.FR;

const i18n = createI18n({
    legacy: false,
    messages,
    locale: defaultLocale,
    fallbackLocale: defaultLocale
});

export default i18n;

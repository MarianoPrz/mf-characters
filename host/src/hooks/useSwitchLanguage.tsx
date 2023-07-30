
import i18nRMInstance from "rickandmorty/i18nInstance";
import i18nFutInstance from "futurama/i18nInstance";
import appHostInstance from "../i18n";
import { useState } from "react";

const useSwitchLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>(appHostInstance.language);
    const switchAllLanguages = (languageCode: string) => {
        appHostInstance.changeLanguage(languageCode);
        appHostInstance.reloadResources();
        i18nRMInstance.changeLanguage(languageCode);
        i18nRMInstance.reloadResources()
        i18nFutInstance.changeLanguage(languageCode);
        i18nFutInstance.reloadResources()
        setSelectedLanguage(languageCode);
    };

    return {
        switchAllLanguages,
        selectedLanguage
    };
};

export default useSwitchLanguage;
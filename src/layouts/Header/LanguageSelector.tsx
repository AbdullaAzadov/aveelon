import { LanguageData, TLanguage } from '@data/Language';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@components/index';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<TLanguage>(
    i18n.language as TLanguage
  );

  const changeLanguage = (lang: string) => {
    setLanguage(lang as TLanguage);
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      defaultValue={language}
      options={LanguageData}
      onChange={changeLanguage}
      width={'8.125rem'}
    />
  );
};

import { LanguageData, TLanguage } from '@data/Language';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@components/index';
import { useScreenType } from '@hooks/useScreenType';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<TLanguage>(
    i18n.language as TLanguage
  );
  const { isDesktop } = useScreenType();
  const width = isDesktop ? '8.125rem' : '6.125rem';

  const changeLanguage = (lang: string) => {
    setLanguage(lang as TLanguage);
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      defaultValue={language}
      options={LanguageData}
      onChange={changeLanguage}
      width={width}
    />
  );
};

import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { LanguageData, TLanguage } from '@data/Language.tsx';
import { Select } from '@components/index';

type LanguageSelectorProps = {
  onToggle?: () => void;
};

export const LanguageSelector: FC<LanguageSelectorProps> = ({ onToggle }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<TLanguage>(
    i18n.language as TLanguage
  );

  const changeLanguage = (lang: string) => {
    setLanguage(lang as TLanguage);
    i18n.changeLanguage(lang);
  };

  return (
    <SWrapper>
      <Select
        defaultValue={language}
        options={LanguageData}
        onChange={changeLanguage}
        onToggle={onToggle}
      />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: fit-content;
`;

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { LanguageData, TLanguage } from '@data/Language';
import { Select } from '@components/index';
import { media } from '@utils/style-helpers';

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
    <SWrapper>
      <Select
        defaultValue={language}
        options={LanguageData}
        onChange={changeLanguage}
      />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: 8.125rem;
  ${({ theme }) => media.lessThan(theme, 'desktop')} {
    width: 6.125rem;
  }
`;

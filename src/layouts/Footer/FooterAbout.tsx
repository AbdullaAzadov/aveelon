import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Text, Logo } from '@components/index';
import { media } from '@utils/style-helpers';

export const FooterAbout = () => {
  const { t } = useTranslation();

  return (
    <SWrapper>
      <hr />
      <div className='row'>
        <Logo />
        <Text as='h4'>{t('protected-rights')}</Text>
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  hr {
    border-color: ${(p) => p.theme.colors.brand};
    margin-bottom: 0.625rem;
  }
  div.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    hr {
      margin-bottom: 1rem;
    }
    div.row {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

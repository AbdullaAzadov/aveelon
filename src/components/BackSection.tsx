import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ArrowLeftIcon, Text } from '@components/index';
import { useScreenType } from '@hooks/useScreenType';
import { useNavigate } from 'react-router-dom';

type Tprops = {
  children: React.ReactNode;
};

export const BackSection: FC<Tprops> = ({ children }) => {
  const nav = useNavigate();
  const { isMobile } = useScreenType();
  const { t } = useTranslation();

  return (
    <Container>
      {!isMobile && (
        <div className='back-section' onClick={() => nav(-1)}>
          <ArrowLeftIcon />
          <Text className='bck-txt'>{t('back')}</Text>
        </div>
      )}
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding-top: clamp(0.75rem, 2.3529vw + 0.1765rem, 3rem);
  .back-section {
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2.5rem;
    width: max-content;

    &,
    svg path,
    .bck-txt {
      transition: all 0.15s ease-out;
    }

    svg {
      height: 1rem;
      width: 1.25rem;
    }

    &:hover {
      svg path {
        stroke: ${(p) => p.theme.colors.brand};
      }
      .bck-txt {
        color: ${(p) => p.theme.colors.brand};
      }
    }
  }
`;

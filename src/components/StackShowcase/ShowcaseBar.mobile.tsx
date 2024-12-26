import { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon, Text } from '@components/index';
import { IStackTab } from '@data/StackShowcase';
import { ShowcaseBarItems } from './ShowcaseBarItems';
import { useTranslation } from 'react-i18next';

type props = {
  data: IStackTab[];
};

export const ShowcaseBarMobile = ({ data }: props) => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const handleIncrease = () =>
    setActiveTab((v) => (v + 1 >= data.length ? 0 : v + 1));

  const handleDecrease = () =>
    setActiveTab((v) => (v - 1 < 0 ? data.length - 1 : v - 1));

  return (
    <SContainer>
      <div className='panel'>
        {data.length > 1 && (
          <div onClick={handleDecrease}>
            <ArrowLeftIcon />
          </div>
        )}
        <Text as='h3'>{t(data[activeTab].title || '')}</Text>
        {data.length > 1 && (
          <div onClick={handleIncrease}>
            <ArrowRightIcon />
          </div>
        )}
      </div>
      <div className='content'>
        {data[activeTab].tab.map((item, index) => (
          <ShowcaseBarItems data={item} key={index} />
        ))}
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  border-radius: 1rem;

  .panel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.5rem;
    gap: 2rem;
    background-color: ${(p) => p.theme.colors.gray};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    svg {
      cursor: pointer;
      width: 1rem;
      height: 1rem;

      &:hover path {
        stroke: ${(p) => p.theme.colors.brand};
      }
    }
  }

  .content {
    background-color: ${(p) => p.theme.colors.grayLight};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 1.25rem;
    padding: 1.25rem 0;
  }
`;

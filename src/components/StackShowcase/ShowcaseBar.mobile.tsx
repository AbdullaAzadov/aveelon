import { useState } from 'react';
import styled from 'styled-components';
import { ShowcaseBarTab } from '@components/index';
import { IStackTab } from '@data/StackShowcase';
import { ShowcaseBarItems } from './ShowcaseBarItems';

type props = {
  data: IStackTab[];
};

export const ShowcaseBarMobile = ({ data }: props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SContainer>
      <div className='panel'>
        {data.map((item, index) => (
          <ShowcaseBarTab
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </ShowcaseBarTab>
        ))}
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
  }

  .content {
    flex: 0.725;
    background-color: ${(p) => p.theme.colors.grayLight};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.25rem;
    padding: 1.25rem 0;
  }
`;

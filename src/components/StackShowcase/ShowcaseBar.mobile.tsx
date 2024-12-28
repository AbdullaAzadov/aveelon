import { useState } from 'react';
import styled from 'styled-components';
import { IStackTab } from '@data/StackShowcase';
import { ShowcaseBarItems } from './ShowcaseBarItems';
import { TabSections } from '@components/index';

type props = {
  data: IStackTab[];
};

export const ShowcaseBarMobile = ({ data }: props) => {
  const sections = data.map((tab) => tab.title);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SContainer>
      <div className='panel'>
        <TabSections
          sections={sections}
          selectedIndex={activeTab}
          onSelectSection={setActiveTab}
          size={'s'}
          outline={false}
        />
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
    padding: 0 1rem;

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

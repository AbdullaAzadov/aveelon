import { useState } from 'react';
import styled from 'styled-components';
import { ShowcaseBarTab } from '@components/index';
import { IStackTab } from '@data/StackShowcase';
import { ShowcaseBarItems } from './ShowcaseBarItems';

type props = {
  data: IStackTab[];
};

export const ShowcaseBar = ({ data }: props) => {
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
        <div className='content-items'>
          {data[activeTab].tab.map((item, index) => (
            <ShowcaseBarItems data={item} key={index} />
          ))}
        </div>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  height: clamp(31.25rem, 25vw + 11.25rem, 41.25rem);
  border-radius: 2rem;
  display: flex;

  .panel {
    padding-left: clamp(0.25rem, 4.8611vw + -2.0833rem, 3.75rem);
    flex: 0.275;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.75rem;
    background-color: ${(p) => p.theme.colors.gray};
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  .content {
    flex: 0.725;
    background-color: ${(p) => p.theme.colors.grayLight};
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto;
  }

  .content-items {
    margin: 1rem auto;
    width: 80%;
  }
`;

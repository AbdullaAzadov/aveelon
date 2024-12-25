import { IProcessStep } from '@data/ProccesSteps';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { TabSections, Text } from '@components/index';
import { useTranslation } from 'react-i18next';

type props = {
  data: IProcessStep[];
  sectionHeader: string;
};

export const ProcessSteps: FC<props> = ({ data, sectionHeader }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const tabSections = data.map((step) => step.tabName);
  const currentTab = data[selectedIndex];

  return (
    <SContainer>
      <Text as='h1' className='header'>
        {t(sectionHeader)}
      </Text>
      <TabSections
        sections={tabSections}
        selectedIndex={selectedIndex}
        onSelectSection={(value: number) => setSelectedIndex(value)}
        size='l'
      />
      <SContent>
        <div className='img'>{currentTab.icon}</div>
        <div className='info'>
          {currentTab.info.map((info, index) => (
            <div className='info-item' key={index}>
              <Text as='h2' className='info-item--title' key={index}>
                {t(info.title)}
              </Text>
              <Text>{t(info.description)}</Text>
            </div>
          ))}
        </div>
      </SContent>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;

  .header {
    margin-bottom: clamp(2.5rem, 3.4722vw + 0.8333rem, 5rem);
  }

  .tab-section {
    margin-bottom: clamp(1.25rem, 3.4722vw + -0.4167rem, 3.75rem);
  }
`;

const SContent = styled.div`
  display: flex;
  gap: clamp(4rem, 7.6389vw + 0.3333rem, 9.5rem);

  .img svg {
    width: clamp(20rem, 11.1111vw + 14.6667rem, 28rem);
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    width: clamp(20rem, 32.2917vw + 4.5rem, 43.25rem);
  }

  .info-item--title {
    margin-bottom: 1.25rem;
  }
`;

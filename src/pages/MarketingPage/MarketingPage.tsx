import {
  PageHeroSection,
  ProcessCarousel,
  ProcessSteps,
  TabBar,
  TabCarousel,
} from '@components/index';
import {
  MarketingPageHeroData as HeroData,
  MarkettingProcessData,
  PromotionMethodsData,
} from '@data/MarketingPage';
import { useScreenType } from '@hooks/useScreenType';
import styled from 'styled-components';

export const MarketingPage = () => {
  const { isMobile } = useScreenType();
  return (
    <SContainer>
      <PageHeroSection
        header={HeroData.header}
        paragraph={HeroData.paragraph}
        imageSrc={HeroData.imageSrc}
        buttonText={HeroData.buttonText}
      />
      {isMobile ? (
        <ProcessCarousel
          data={MarkettingProcessData}
          sectionHeader='marketing-process'
        />
      ) : (
        <ProcessSteps
          data={MarkettingProcessData}
          sectionHeader='marketing-process'
        />
      )}

      {isMobile ? (
        <TabCarousel
          header={PromotionMethodsData.header}
          tabs={PromotionMethodsData.tabs}
        />
      ) : (
        <TabBar
          header={PromotionMethodsData.header}
          tabs={PromotionMethodsData.tabs}
        />
      )}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.25rem;
  margin-bottom: 6.25rem;
`;

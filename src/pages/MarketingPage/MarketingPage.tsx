import {
  PageHeroSection,
  ProcessCarousel,
  ProcessSteps,
  TabBar,
  TabCarousel,
  StackShowcase,
} from '@components/index';
import {
  MarketingPageHeroData as HeroData,
  MarketingServicesData,
  MarketingStackData,
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
        <>
          <TabCarousel
            header={MarketingServicesData.header}
            tabs={MarketingServicesData.tabs}
          />
          <ProcessCarousel
            data={MarkettingProcessData}
            sectionHeader='marketing-process'
          />
          <TabCarousel
            header={PromotionMethodsData.header}
            tabs={PromotionMethodsData.tabs}
          />
        </>
      ) : (
        <>
          <TabBar
            header={MarketingServicesData.header}
            tabs={MarketingServicesData.tabs}
          />
          <ProcessSteps
            data={MarkettingProcessData}
            sectionHeader='marketing-process'
          />
          <TabBar
            header={PromotionMethodsData.header}
            tabs={PromotionMethodsData.tabs}
          />
        </>
      )}

      <StackShowcase data={MarketingStackData} />
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

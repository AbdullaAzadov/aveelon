import {
  PageHeroSection,
  ProcessCarousel,
  ProcessSteps,
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
      <TabCarousel
        header={MarketingServicesData.header}
        tabs={MarketingServicesData.tabs}
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
      <TabCarousel
        header={PromotionMethodsData.header}
        tabs={PromotionMethodsData.tabs}
      />

      <StackShowcase data={MarketingStackData} />
    </SContainer>
  );
};

export default MarketingPage;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(4.25rem, 2.0915vw + 3.7402rem, 6.25rem);
  margin-bottom: clamp(1.25rem, 5.2288vw + -0.0245rem, 6.25rem);
`;

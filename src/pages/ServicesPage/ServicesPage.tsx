import styled from 'styled-components';
import {
  PageHeroSection,
  ProcessCarousel,
  ProcessSteps,
  StackShowcase,
  TabBar,
  TabCarousel,
} from '@components/index';
import {
  DevProcessData,
  DevStepsData,
  ServicesPageHeroData as HeroData,
  ITServicesData,
  TechStackData,
} from '@data/ServicesPage';
import { useScreenType } from '@hooks/useScreenType';

export const ServicesPage = () => {
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
            header={ITServicesData.header}
            tabs={ITServicesData.tabs}
          />
          <ProcessCarousel data={DevProcessData} sectionHeader='dev-process' />
          <TabCarousel header={DevStepsData.header} tabs={DevStepsData.tabs} />
        </>
      ) : (
        <>
          <TabBar header={ITServicesData.header} tabs={ITServicesData.tabs} />
          <ProcessSteps data={DevProcessData} sectionHeader='dev-process' />
          <TabBar header={DevStepsData.header} tabs={DevStepsData.tabs} />
        </>
      )}

      <StackShowcase data={TechStackData} />
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(4.25rem, 2.0915vw + 3.7402rem, 6.25rem);
  margin-bottom: clamp(1.25rem, 5.2288vw + -0.0245rem, 6.25rem);
`;

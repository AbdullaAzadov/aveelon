import { PageHeroSection, TabBar, TabCarousel } from '@components/index';
import { allServicesData, MainPageHeroData as HeroData } from '@data/MainPage';
import { AboutUsData } from '@data/MainPage';
import styled from 'styled-components';
import { PortfolioHighlight } from './PortfolioHighlight';

export const MainPage = () => {
  return (
    <SContainer>
      <PageHeroSection
        header={HeroData.header}
        paragraph={HeroData.paragraph}
        imageSrc={HeroData.imageSrc}
        buttonText={HeroData.buttonText}
      />
      <TabBar header={AboutUsData.header} tabs={AboutUsData.tabs} />
      <TabCarousel
        header={allServicesData.header}
        tabs={allServicesData.tabs}
      />
      <PortfolioHighlight />
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

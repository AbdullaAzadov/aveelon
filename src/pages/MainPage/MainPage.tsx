import { PageHeroSection, TabBar, TabCarousel } from '@components/index';
import { allServicesData, MainPageHeroData as HeroData } from '@data/MainPage';
import { AboutUsData } from '@data/MainPage';
import { useScreenType } from '@hooks/useScreenType';
import styled from 'styled-components';
import { PortfolioHighlight } from './PortfolioHighlight';

export const MainPage = () => {
  const { isMobile } = useScreenType();
  return (
    <SContainer>
      <PageHeroSection
        header={HeroData.header}
        paragraph={HeroData.paragraph}
        imageSrc={HeroData.imageSrc}
        buttonText={HeroData.buttonText}
      />
      <TabBar
        header={AboutUsData.header}
        tabs={AboutUsData.tabs}
        cardSize={'small'}
      />
      {isMobile ? (
        <TabCarousel
          header={allServicesData.header}
          tabs={allServicesData.tabs}
        />
      ) : (
        <TabBar header={allServicesData.header} tabs={allServicesData.tabs} />
      )}
      <PortfolioHighlight />
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

import { PageHeroSection } from '@components/index';
import { MarketingPageHeroData as HeroData } from '@data/MarketingPage';

export const MarketingPage = () => {
  return (
    <div>
      <PageHeroSection
        header={HeroData.header}
        paragraph={HeroData.paragraph}
        imageSrc={HeroData.imageSrc}
        buttonText={HeroData.buttonText}
      />
    </div>
  );
};

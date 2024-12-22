import { PageHeroSection } from '@components/index';
import { ServicesPageHeroData as HeroData } from '@data/ServicesPage';

export const ServicesPage = () => {
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

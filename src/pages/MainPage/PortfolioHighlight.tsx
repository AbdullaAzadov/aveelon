import { Button, ImageStack, ImageWithGlow, Text } from '@components/index';
import { PortfolioData } from '@data/MainPage';
import { useScreenType } from '@hooks/useScreenType';
import { RouteNames } from '@routes/RouteNames';
import { scrollToTop } from '@utils/screen';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const PortfolioHighlight = () => {
  const { t } = useTranslation();
  const { isMobile } = useScreenType();
  const nav = useNavigate();

  const handleClick = () => {
    scrollToTop();
    nav(RouteNames.PORTFOLIO.INDEX);
  };

  return (
    <SWrapper>
      <div className='info'>
        <Text as='h1'>{t(PortfolioData.header)}</Text>
        <div>
          {PortfolioData.paragraph.map((item, index) => (
            <Text key={index}>{t(item)}</Text>
          ))}
        </div>
        <Button outlined className='btn' onClick={handleClick}>
          Перейти в портфолио
        </Button>
      </div>
      <div className='image'>
        {isMobile ? (
          <ImageWithGlow src={PortfolioData.imageMobileSrc} alt='Phone' />
        ) : (
          <ImageStack images={PortfolioData.imageSrc} />
        )}
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 9.5rem 0;
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.75rem;
  }
  .btn {
    max-width: 25rem;
  }

  .image {
    width: clamp(32rem, 77.5vw + -30rem, 63rem);
    height: clamp(22.125rem, 53.4375vw + -20.625rem, 43.5rem);
  }

  ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
    .btn {
      width: 18rem;
    }
    .image {
      width: clamp(25rem, 21.875vw + 14.5rem, 32rem);
      height: clamp(17.25rem, 15.2344vw + 9.9375rem, 22.125rem);
    }
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    flex-direction: column-reverse;
    align-items: center;
    .info {
      text-align: center;
      gap: 2rem;
      p {
        display: inline;
        margin-right: 0.25rem;
      }
    }
    .btn {
      width: 15rem;
      margin: 0 auto;
    }
    .image {
      width: 62.5vw;
      margin-bottom: 2rem;
    }
  }
`;

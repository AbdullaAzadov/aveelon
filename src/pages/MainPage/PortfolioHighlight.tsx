import { Button, ImageWithGlow, Text } from '@components/index';
import { PortfolioData } from '@data/MainPage';
import { useScreenType } from '@hooks/useScreenType';
import { RouteNames } from '@routes/RouteNames';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const PortfolioHighlight = () => {
  const { t } = useTranslation();
  const { isMobile } = useScreenType();
  const nav = useNavigate();
  return (
    <SWrapper>
      <div className='info'>
        <Text as='h1'>{t(PortfolioData.header)}</Text>
        <div>
          {PortfolioData.paragraph.map((item, index) => (
            <Text key={index}>{t(item)}</Text>
          ))}
        </div>
        <Button
          outlined
          className='btn'
          onClick={() => nav(RouteNames.PORTFOLIO.INDEX)}
        >
          Перейти в портфолио
        </Button>
      </div>
      <div className='image'>
        <ImageWithGlow
          src={isMobile ? PortfolioData.imageMobileSrc : PortfolioData.imageSrc}
          alt='Phone'
          hideGlow={!isMobile}
        />
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3.75rem;
    padding-left: clamp(2.5rem, 20.9821vw + -10.9286rem, 14.25rem);
  }
  .btn {
    max-width: 25rem;
  }

  .image {
    padding-right: clamp(3rem, 13.6161vw + -5.7143rem, 10.625rem);
    width: clamp(18rem, 13.3929vw + 9.4286rem, 25.5rem);
  }

  ${({ theme }) => media.lessThan(theme, 'wideTablet')} {
    .info {
      padding-left: clamp(0rem, 15.625vw + -7.5rem, 2.5rem);
    }
    .btn {
      width: 18rem;
    }
    .image {
      padding-right: clamp(0rem, 18.75vw + -9rem, 3rem);
      width: clamp(13rem, 31.25vw + -2rem, 18rem);
    }
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    flex-direction: column-reverse;
    align-items: center;
    .info {
      text-align: center;
      padding-left: 0;
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
      padding-right: 0;
      width: 45vw;
      margin-bottom: 2rem;
    }
  }
`;

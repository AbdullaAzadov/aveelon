import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styled from 'styled-components';
import { IProcessStep } from '@data/ProccesSteps';
import { Text } from '@components/index';
import { useScreenType } from '@hooks/useScreenType';

type props = {
  data: IProcessStep[];
  sectionHeader: string;
};

export const ProcessCarousel: FC<props> = ({ data, sectionHeader }) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const scrollRef = useRef(null);
  const tabSections = data.map((step) => step.tabName);
  const { isUltraSmall } = useScreenType();

  const handleSetIndex = (index: number) => {
    if (!scrollRef.current) return null;
    const el = scrollRef.current as HTMLElement;
    el.scrollLeft = el.offsetWidth * index;
    setSelectedIndex(index);
  };

  const handleScroll = (e: React.UIEvent<HTMLElement>) =>
    setSelectedIndex(
      Math.floor(
        (e.target as HTMLElement).scrollLeft /
          (e.target as HTMLElement)?.offsetWidth
      )
    );

  return (
    <SContainer>
      <Text as='h1' className='header'>
        {t(sectionHeader)}
      </Text>
      <Text as='h2' className='tab-section' color='brand'>
        {t(tabSections[selectedIndex])}
      </Text>
      <SRow ref={scrollRef} onScroll={handleScroll}>
        {data.map((step, index) => (
          <SContent key={index}>
            <div className='img'>{step.icon}</div>
            <div className='info'>
              {step.info.map((info, index) => (
                <div className='info-item' key={index}>
                  <Text
                    as={!isUltraSmall ? 'h2' : 'h3'}
                    className='info-item--title'
                    key={index}
                  >
                    {t(info.title)}
                  </Text>
                  <Text
                    as={!isUltraSmall ? 'p' : 'h4'}
                    className='info-item--description'
                  >
                    {t(info.description)}
                  </Text>
                </div>
              ))}
            </div>
          </SContent>
        ))}
      </SRow>
      <div className='card-indicator'>
        {tabSections.map((_, index) => (
          <div
            key={index}
            className={clsx('card-dot', index === selectedIndex && 'active')}
            onClick={() => handleSetIndex(index)}
          />
        ))}
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;

  .header {
    text-align: center;
    margin-bottom: clamp(1.75rem, 7.5893vw + 0.2321rem, 3.875rem);
  }

  .tab-section {
    text-align: center;
    margin-bottom: clamp(0.75rem, 3.5714vw + 0.0357rem, 1.75rem);
  }

  .card-indicator {
    display: flex;
    justify-content: center;
    gap: 0.625rem;
  }

  .card-dot {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.white};
    transition: all 0.3s ease;
    cursor: pointer;

    &.active {
      background-color: ${(p) => p.theme.colors.brand};
    }
  }

  @media (max-width: 340px) {
    .info-item--description,
    .info-item--title {
      width: 18rem;
    }
  }
`;

const SContent = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.75rem, 6.25vw + 0.5rem, 3.5rem);
  margin-bottom: clamp(1.75rem, 6.25vw + 0.5rem, 3.5rem);
  scroll-snap-align: center;

  .img svg {
    width: clamp(8.875rem, 43.75vw + 0.125rem, 21.125rem);
    height: clamp(8.875rem, 43.75vw + 0.125rem, 21.125rem);
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: clamp(1.75rem, 6.25vw + 0.5rem, 3.5rem);
    width: clamp(20rem, 32.2917vw + 4.5rem, 43.25rem);
  }

  .info-item--title {
    margin-bottom: clamp(0.875rem, 3.125vw + 0.25rem, 1.75rem);
  }

  @media (max-width: 340px) {
    .info {
      width: 18rem;
    }
    min-width: 18rem;
  }
`;

const SRow = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;

  @media (max-width: 340px) {
    gap: 2rem;
  }
`;

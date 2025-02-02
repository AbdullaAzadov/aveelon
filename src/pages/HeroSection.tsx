import { ImageWithGlow, Text, Button } from '@components/index';
import styled from 'styled-components';
import { useRedirect } from '@hooks/useRedirect';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export interface PageHeroSectionProps {
  header: string;
  paragraph: string;
  imageSrc: string;
  buttonText: string;
}

export const PageHeroSection: React.FC<PageHeroSectionProps> = ({
  header,
  paragraph,
  imageSrc,
  buttonText,
}) => {
  const { handleClick } = useRedirect('whatsapp');
  const { t } = useTranslation();

  return (
    <SWrapper>
      <AnimatePresence mode='wait'>
        <motion.div
          key={header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className='left'>
            <Text as='h1'>{t(header)}</Text>
            <Text style={{ width: '65%' }}>{t(paragraph)}</Text>
            <Button onClick={handleClick}>{t(buttonText)}</Button>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className='right'>
        <div className='image-wrapper'>
          <ImageWithGlow src={imageSrc} alt='Computer' />
        </div>
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: 100%;
  padding: 6.875rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    flex: 1 1 50%;
    *:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  .right {
    flex: 1 1 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 3rem;
  }

  .image-wrapper {
    width: clamp(15.25rem, 31.771vw + 0rem, 38.125rem);
    height: clamp(15.25rem, 31.771vw + 0rem, 38.125rem);
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    flex-direction: column-reverse;
    padding: clamp(0rem, 1.5686vw + -0.3824rem, 1.5rem) 0 2.5rem;

    .right {
      padding-right: 0;
      justify-content: center;
      margin-bottom: 3.5rem;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      *:not(:last-child) {
        margin-bottom: 1.875rem;
      }
    }
  }
`;

import { ImageWithGlow, Text, Button } from '@components/index';
import styled from 'styled-components';
import { useRedirect } from '@hooks/useRedirect';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';

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
      <div className='left'>
        <Text as='h1'>{t(header)}</Text>
        <Text style={{ width: '65%' }}>{t(paragraph)}</Text>
        <Button onClick={handleClick}>{t(buttonText)}</Button>
      </div>
      <div className='right'>
        <ImageWithGlow src={imageSrc} alt='Computer' />
      </div>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  padding: 6.875rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    flex: 1 1 60%;
    *:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  .right {
    flex: 1 1 40%;
    display: flex;
    justify-content: flex-end;
    padding-right: 3rem;
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    flex-direction: column-reverse;
    padding: 1.5rem 0 2.5rem;

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

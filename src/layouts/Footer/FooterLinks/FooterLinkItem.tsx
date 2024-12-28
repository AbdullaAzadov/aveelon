import { Text } from '@components/Text';
import { IFooterLinkItem } from '@data/Footer';
import { useScreenType } from '@hooks/useScreenType';
import { scrollToTop } from '@utils/screen';
import { media } from '@utils/style-helpers';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterLinkItem = ({
  header,
  links = [],
  children = null,
}: {
  header: string;
  links?: IFooterLinkItem[];
  children?: React.ReactNode;
}) => {
  const { t } = useTranslation();
  const { isUltraSmall } = useScreenType();
  return (
    <StyledWrapper>
      <Text as='h3' className='header'>
        {t(header)}
      </Text>
      {links.map((item, index) => (
        <Link to={item.link} key={index} onClick={scrollToTop}>
          <Text as={isUltraSmall ? 'h4' : 'p'}>{t(item.name)}</Text>
        </Link>
      ))}
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  .header {
    margin-bottom: 0.625rem;
    ${({ theme }) => media.lessThan(theme, 'ultraSmall')} {
      margin-bottom: 0;
    }
  }

  ${({ theme }) => media.lessThan(theme, 'tablet')} {
    text-align: center;
  }
`;

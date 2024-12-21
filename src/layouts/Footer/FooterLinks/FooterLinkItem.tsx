import { Text } from '@components/Text';
import { IFooterLinkItem } from '@data/Footer';
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
  return (
    <StyledWrapper>
      <Text as='h3'>{t(header)}</Text>
      {links.map((item, index) => (
        <Link to={item.link} key={index}>
          <Text as='p'>{t(item.name)}</Text>
        </Link>
      ))}
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  h3 {
    margin-bottom: 0.625rem;
  }
`;

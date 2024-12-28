import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Accordion } from '@components/Accordion';
import { ArrowRightIcon } from '@components/icons';
import { Text } from '@components/Text';
import { IFooterLinkItem } from '@data/Footer';

export const FooterLinkItemMobile = ({
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
      <Accordion
        BaseIcon={<ArrowRightIcon />}
        rotateAngle={90}
        title={<Text as='h3'>{t(header)}</Text>}
      >
        {links.map((item, index) => (
          <Link to={item.link} key={index} onClick={scrollToTop}>
            <Text as='p'>{t(item.name)}</Text>
          </Link>
        ))}
        {children}
      </Accordion>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 9.25rem;
`;

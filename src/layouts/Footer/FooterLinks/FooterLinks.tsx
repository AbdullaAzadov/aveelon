import styled from 'styled-components';
import { footerLinks } from '@data/Footer';
import { FooterLinkItem } from './FooterLinkItem';
import { Mail, Tel, LinkedIcon } from '@components/index';
import { TelegramIcon, WhatsappIcon } from '@components/icons';
import { CONST } from '@constants/constants';

export const FooterLinks = () => {
  return (
    <StyledWrapper>
      {footerLinks.map((data, index) => (
        <FooterLinkItem header={data.header} links={data.links} key={index} />
      ))}
      <FooterLinkItem header='contacts'>
        <Tel value='77008008283' label='+7 700 800 82 83' />
        <Mail value={'info@aveelon.com'} label='info@aveelon.com' />
        <StyledIconsWrapper>
          <LinkedIcon
            renderIcon={<WhatsappIcon />}
            link={CONST.WHATSAPP_LINK}
          />
          <LinkedIcon
            renderIcon={<TelegramIcon />}
            link={CONST.TELEGRAM_LINK}
          />
        </StyledIconsWrapper>
      </FooterLinkItem>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledIconsWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
`;

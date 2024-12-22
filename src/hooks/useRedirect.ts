import CONST from '@constants/constants';

type TRedirect = 'whatsapp' | 'telegram' | string;

export const useRedirect = (redirectTo: TRedirect) => {
  const handleClick = () => {
    switch (redirectTo) {
      case 'whatsapp':
        window.open(CONST.WHATSAPP_LINK, '_blank');
        break;
      case 'telegram':
        window.open(CONST.TELEGRAM_LINK, '_blank');
        break;
      default:
        window.open(redirectTo, '_blank');
        break;
    }
  };

  return { handleClick };
};

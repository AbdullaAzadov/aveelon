import { IselectOption } from '@components/Select';
import { FlagGBIcon, FlagKZIcon, FlagRUIcon } from '@components/icons';

export type TLanguage = 'ru' | 'kz' | 'en';

export const LanguageData: IselectOption[] = [
  {
    value: 'ru',
    label: 'russian',
    icon: <FlagRUIcon />,
  },
  {
    value: 'en',
    label: 'english',
    icon: <FlagGBIcon />,
  },
  {
    value: 'kz',
    label: 'kazakh',
    icon: <FlagKZIcon />,
  },
];

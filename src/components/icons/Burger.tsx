import { FC } from 'react';

type props = {
  onClick?: () => void;
};

export const BurgerIcon: FC<props> = ({ onClick = () => {} }) => {
  return (
    <svg
      width='24'
      height='16'
      viewBox='0 0 24 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ cursor: 'pointer' }}
      onClick={() => onClick()}
    >
      <g clipPath='url(#clip0_794_7730)'>
        <path
          d='M2 14H22'
          stroke='#DE3B38'
          strokeWidth='3'
          strokeLinecap='round'
        />
        <path
          d='M2 8H22'
          stroke='#DE3B38'
          strokeWidth='3'
          strokeLinecap='round'
        />
        <path
          d='M2 2H22'
          stroke='#DE3B38'
          strokeWidth='3'
          strokeLinecap='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_794_7730'>
          <rect width='24' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

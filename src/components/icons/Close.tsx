import { FC } from 'react';

type props = {
  onClick?: () => void;
};

export const CloseIcon: FC<props> = ({ onClick = () => {} }) => {
  return (
    <svg
      width='29'
      height='29'
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ cursor: 'pointer' }}
      onClick={() => onClick()}
    >
      <path
        d='M7.07129 7.0708L21.2134 21.2129'
        stroke='#DE3B38'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M7.07129 21.2134L21.2134 7.07124'
        stroke='#DE3B38'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

import { FC } from 'react';

type props = {
  onClick?: () => void;
};

export const TelegramIcon: FC<props> = ({ onClick = () => {} }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ cursor: 'pointer' }}
      onClick={() => onClick()}
      className='tg-icon'
    >
      <path
        d='M8.24961 12.6469L16.6777 20.0625C16.7751 20.1488 16.8933 20.2082 17.0206 20.2349C17.1479 20.2617 17.28 20.2549 17.4039 20.2152C17.5277 20.1754 17.6391 20.1042 17.7272 20.0084C17.8152 19.9126 17.8768 19.7956 17.9059 19.6688L21.4309 4.27503C21.4604 4.14246 21.4534 4.00435 21.4106 3.87544C21.3678 3.74654 21.2908 3.63168 21.1878 3.54312C21.0848 3.45457 20.9597 3.39565 20.8258 3.37265C20.692 3.34965 20.5544 3.36343 20.4277 3.41253L3.12149 10.2094C2.42774 10.4813 2.52149 11.4938 3.25274 11.6438L8.24961 12.6469Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.25 12.6468L21.0094 3.43115'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.4594 16.3501L9.53437 19.2751C9.43002 19.3811 9.29653 19.4536 9.15085 19.4835C9.00517 19.5134 8.85388 19.4994 8.71622 19.4431C8.57856 19.3868 8.46073 19.2909 8.37772 19.1675C8.2947 19.0441 8.25025 18.8988 8.25 18.7501V12.647'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

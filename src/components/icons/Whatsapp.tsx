import { FC } from 'react';

type props = {
  onClick?: () => void;
};

export const WhatsappIcon: FC<props> = ({ onClick = () => {} }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ cursor: 'pointer' }}
      onClick={() => onClick()}
      className='wa-icon'
    >
      <path
        d='M4.2565 16.5938C3.13983 14.7098 2.74924 12.483 3.15804 10.3315C3.56684 8.17989 4.74693 6.25153 6.47677 4.90838C8.2066 3.56523 10.3672 2.89967 12.553 3.03666C14.7388 3.17364 16.7994 4.10374 18.348 5.65235C19.8966 7.20095 20.8267 9.26157 20.9637 11.4473C21.1007 13.6331 20.4351 15.7937 19.0919 17.5236C17.7488 19.2534 15.8204 20.4335 13.6689 20.8423C11.5173 21.2511 9.29049 20.8605 7.4065 19.7438V19.7438L4.294 20.6251C4.16648 20.6624 4.03128 20.6647 3.90256 20.6317C3.77384 20.5988 3.65635 20.5319 3.5624 20.4379C3.46845 20.344 3.4015 20.2265 3.36858 20.0978C3.33565 19.969 3.33796 19.8338 3.37525 19.7063L4.2565 16.5938Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.2594 17.25C13.2726 17.2525 12.295 17.0599 11.3828 16.6834C10.4706 16.3069 9.64176 15.7539 8.94395 15.0561C8.24615 14.3583 7.69311 13.5295 7.3166 12.6173C6.9401 11.7051 6.74755 10.7275 6.75002 9.74065C6.7525 9.04608 7.03016 8.3808 7.52217 7.89055C8.01419 7.40029 8.68045 7.12502 9.37502 7.12502V7.12502C9.48962 7.12411 9.60234 7.1541 9.70133 7.21184C9.80032 7.26958 9.88191 7.35294 9.93752 7.45315L11.0344 9.36565C11.0996 9.48191 11.1331 9.61329 11.1315 9.74659C11.1298 9.87989 11.0931 10.0104 11.025 10.125L10.1438 11.5969C10.5952 12.601 11.399 13.4049 12.4031 13.8563L13.875 12.975C13.9896 12.9069 14.1202 12.8702 14.2535 12.8686C14.3868 12.8669 14.5181 12.9004 14.6344 12.9656L16.5469 14.0625C16.6471 14.1181 16.7305 14.1997 16.7882 14.2987C16.8459 14.3977 16.8759 14.5104 16.875 14.625C16.8726 15.3188 16.5965 15.9837 16.1068 16.4752C15.6171 16.9666 14.9532 17.2451 14.2594 17.25V17.25Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

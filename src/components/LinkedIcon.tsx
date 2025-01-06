export const LinkedIcon = ({
  renderIcon,
  link = 'https://google.com',
  onClick,
}: {
  renderIcon: React.ReactNode;
  link: string;
  onClick?: () => void;
}) => {
  return (
    <a
      href={link}
      className='link-icon'
      target='_blank'
      rel='noopener noreferrer'
      onClick={onClick}
    >
      {renderIcon}
    </a>
  );
};

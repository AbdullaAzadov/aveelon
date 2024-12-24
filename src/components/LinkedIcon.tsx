export const LinkedIcon = ({
  renderIcon,
  link = 'https://google.com',
}: {
  renderIcon: React.ReactNode;
  link: string;
}) => {
  return (
    <a
      href={link}
      className='link-icon'
      target='_blank'
      rel='noopener noreferrer'
    >
      {renderIcon}
    </a>
  );
};

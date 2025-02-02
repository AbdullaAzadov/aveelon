export function ArrowDownIcon({
  style = {},
  className = '',
}: {
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      style={style}
    >
      <path d='M1 0.5L6 6.5L11 0.5' stroke='white' />
    </svg>
  );
}

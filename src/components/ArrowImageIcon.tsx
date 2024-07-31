import clsx from 'clsx';

type Props = {
  isWhite?: boolean;
};

const ArrowImageIcon = ({ isWhite = true }: Props) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='43'
        height='14'
        className={clsx('fill-none', isWhite ? 'stroke-white' : 'stroke-black')}
      >
        <g>
          <path d='M0 7h41.864M35.428 1l6 6-6 6' />
        </g>
      </svg>
    </>
  );
};

export default ArrowImageIcon;

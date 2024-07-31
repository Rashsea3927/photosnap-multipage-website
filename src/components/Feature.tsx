import Image from 'next/image';

type Props = {
  feature: {
    title: string;
    paragraph: string;
    image: string;
  };
};

const Feature = ({ feature }: Props) => {
  return (
    <li className='grid gap-12 lg:grid-row-2'>
      <div className='grid lg:h-[72px]'>
        <Image
          src={feature.image}
          className='justify-self-center lg:self-center'
          width={0}
          height={0}
          alt={feature.title}
        />
      </div>
      <div className='grid gap-4'>
        <h3 className='text-center text-lg font-bold'>{feature.title}</h3>
        <p className='text-center text-[15px] text-black/60'>{feature.paragraph}</p>
      </div>
    </li>
  );
};

export default Feature;

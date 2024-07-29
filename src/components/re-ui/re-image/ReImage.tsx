import Image from 'next/image';
import { ComponentProps } from 'react';
type TImageProps = {
  src: string;
  alt: string;
  sizes?: string;
} & ComponentProps<typeof Image>;
export const ReImage = ({
  src,
  alt,
  sizes = '(max-width: 1200px) 100vw 60vw',
  ...props
}: TImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={650}
      height={366}
      sizes={sizes}
      priority
      style={{
        width: '100%',
        height: 'auto',
      }}
      {...props}
    />
  );
};

export default ReImage;

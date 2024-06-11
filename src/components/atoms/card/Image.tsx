import Image from 'next/image';
import React from 'react';

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export const ResponsiveImage: React.FC<ImageProps> = (props) => {
  const { src, alt, width, height} = props
  return (
    <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}  // La anchura de la imagen original
        height={height} // La altura de la imagen original
      />
    </div>
  );
}


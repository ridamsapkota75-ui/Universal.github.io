import React from 'react';
import Image from 'next/image';

interface SectionBackgroundProps {
  imageSrc: string;
  imageAlt: string;
  overlay?: 'dark' | 'blue' | 'gradient';
  children: React.ReactNode;
  className?: string;
  priority?: boolean;
}

export default function SectionBackground({
  imageSrc,
  imageAlt,
  overlay = 'dark',
  children,
  className = '',
  priority = false,
}: SectionBackgroundProps) {
  const overlayStyles = {
    dark: 'bg-gradient-to-b from-deepNavy/80 via-deepNavy/85 to-deepNavy/95',
    blue: 'bg-gradient-to-b from-darkBlue/70 via-deepNavy/80 to-deepNavy/90',
    gradient: 'bg-gradient-to-br from-deepNavy/75 via-darkBlue/80 to-deepNavy/90',
  };

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          quality={75}
          priority={priority}
          sizes="100vw"
        />
      </div>
      {/* Overlay */}
      <div className={`absolute inset-0 z-[1] ${overlayStyles[overlay]}`} />
      {/* Content */}
      <div className="relative z-[2]">
        {children}
      </div>
    </section>
  );
}

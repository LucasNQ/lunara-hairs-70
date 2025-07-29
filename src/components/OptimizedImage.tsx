
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackSrc?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  fallbackSrc = '/placeholder.svg'
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
      )}
      <img
        src={imageError ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={handleError}
        onLoad={handleLoad}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
    </div>
  );
};

export default OptimizedImage;

import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackClassName?: string;
}

export default function SmartImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackClassName = '',
}: SmartImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`flex items-center justify-center bg-surface-2 text-ink-subtle ${fallbackClassName} ${className}`}
        aria-hidden={alt ? undefined : true}
      >
        {alt && <span className="text-sm font-medium">{alt}</span>}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-surface-2" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

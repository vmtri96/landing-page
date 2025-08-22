"use client";

import { useState, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
  placeholder = "blur",
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    placeholder === "blur" ? blurDataURL : src
  );

  useEffect(() => {
    if (priority) {
      setImageSrc(src);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (placeholder === "blur") {
      setImageSrc(src);
    }
  };

  const handleError = () => {
    setIsError(true);
    setImageSrc("/images/fallback-image.jpg"); // Fallback image
  };

  // Generate WebP src if supported (for future use)
  // const generateWebPSrc = () => {
  //   if (typeof window !== 'undefined' && window.Modernizr && window.Modernizr.webp) {
  //     return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  //   }
  //   return src;
  // };

  // Generate responsive srcset
  const generateSrcSet = () => {
    const breakpoints = [320, 640, 768, 1024, 1280, 1536];
    return breakpoints.map((bp) => `${src}?w=${bp} ${bp}w`).join(", ");
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`
          transition-opacity duration-300
          ${isLoaded ? "opacity-100" : "opacity-0"}
          ${isError ? "opacity-50" : ""}
        `}
        sizes={sizes}
        srcSet={generateSrcSet()}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg
              className="w-12 h-12 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm">Không thể tải hình ảnh</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;

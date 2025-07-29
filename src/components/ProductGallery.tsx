import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden">
        <OptimizedImage
          src={images[selectedImageIndex]}
          alt={`${productName} - Imagem ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover"
          width={600}
          height={600}
          priority
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {selectedImageIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImageIndex === index
                  ? 'border-primary shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <OptimizedImage
                src={image}
                alt={`${productName} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                width={64}
                height={64}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
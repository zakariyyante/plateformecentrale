import React from 'react';
import { BrandCard } from './BrandCard';
import { Brand } from '../data/brands';

interface BrandCardGridProps {
  brands: Brand[];
  gclid?: string;
}

export const BrandCardGrid: React.FC<BrandCardGridProps> = ({ brands, gclid }) => {
  return (
    <div className="flex flex-col gap-8 my-16">
      {brands.map((brand, index) => (
        <BrandCard 
          key={brand.id} 
          brand={brand} 
          gclid={gclid} 
          rank={index + 1}
        />
      ))}
    </div>
  );
};

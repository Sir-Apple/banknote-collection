import React, { useState } from 'react';
import { Banknote } from '../types';

interface BanknoteCardProps {
  banknote: Banknote;
}

export const BanknoteCard: React.FC<BanknoteCardProps> = ({ banknote }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[280px] cursor-pointer group perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`preserve-3d absolute w-full h-full duration-1000 transition-transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative h-full rounded-xl overflow-hidden shadow-lg bg-white p-4">
            <div className="flex items-center justify-center h-[200px]">
              <img
                src={banknote.frontImage}
                alt={`${banknote.country} ${banknote.denomination} ${banknote.currency} front`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-lg font-bold">{banknote.country}</h3>
              <p className="text-sm">{banknote.denomination} {banknote.currency}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="relative h-full rounded-xl overflow-hidden shadow-lg bg-white p-4">
            <div className="flex items-center justify-center h-[200px]">
              <img
                src={banknote.backImage}
                alt={`${banknote.country} ${banknote.denomination} ${banknote.currency} back`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <p className="text-sm">{banknote.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
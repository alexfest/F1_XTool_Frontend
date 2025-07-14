import { FC } from 'react';

type BottlePreviewProps = {
  value: string;
};

const BottlePreview: FC<BottlePreviewProps> = ({ value }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-96">
        {/* Bottle Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full relative">
            {/* Bottle Cap */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-coca-cola-red rounded-t-lg" />

            {/* Bottle Neck */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 h-16 bg-coca-cola-red" />

            {/* Bottle Body */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-coca-cola-red rounded-3xl" />

            {/* Coca-Cola Logo */}
            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-40 h-16 bg-white rounded-lg flex items-center justify-center">
              <span className="text-coca-cola-red font-bold text-2xl italic">
                Coca-Cola
              </span>
            </div>

            {/* Name Label */}
            <div className="absolute top-60 left-1/2 transform -translate-x-1/2 w-36 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-coca-cola-red">
              <span className="text-coca-cola-black font-bold text-xl">
                {value || 'Your Name'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Preview</h3>
        <p className="text-gray-600">
          This is how your personalized bottle will look
        </p>
      </div>
    </div>
  );
};

export default BottlePreview;

import React from 'react';
import { Bot as Bottle } from 'lucide-react';

interface LogoProps {
  // eslint-disable-next-line react/require-default-props
  size?: 'small' | 'medium' | 'large';
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'text-xl md:text-2xl',
    medium: 'text-2xl md:text-3xl',
    large: 'text-3xl md:text-4xl',
  };

  const iconSizes = {
    small: 20,
    medium: 24,
    large: 32,
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Bottle size={iconSizes[size]} className="text-coca-cola-red mr-2" />
      <span className={`font-bold ${sizeClasses[size]} text-coca-cola-red`}>
        Share a Coke
      </span>
    </div>
  );
};

export default Logo;

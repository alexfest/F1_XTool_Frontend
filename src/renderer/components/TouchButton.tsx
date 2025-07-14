/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';

interface TouchButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
}

const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  startIcon,
  endIcon,
  className = '',
}) => {
  const baseClasses =
    'rounded-lg font-semibold transition-all duration-200 flex items-center justify-center focus:outline-none';

  const variantClasses = {
    primary:
      'bg-coca-cola-red text-red hover:bg-coca-cola-dark-red active:bg-coca-cola-dark-red shadow-md',
    secondary:
      'bg-coca-cola-black text-red hover:bg-coca-cola-dark-gray active:bg-coca-cola-dark-gray shadow-md',
    outline:
      'bg-transparent border-2 border-coca-cola-red text-coca-cola-red hover:bg-coca-cola-red hover:text-white',
  };

  const sizeClasses = {
    small: 'text-sm py-2 px-4',
    medium: 'text-base py-3 px-6',
    large: 'text-xl py-4 px-8',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default TouchButton;

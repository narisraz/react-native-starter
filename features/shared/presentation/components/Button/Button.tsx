import React from 'react';
import { Button as NativeBaseButton, IButtonProps } from 'native-base';

export interface ButtonProps extends IButtonProps {
  variant?: 'primary' | 'secondary' | 'link';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  children,
  ...props 
}) => {
  return (
    <NativeBaseButton
      variant={variant}
      {...props}
    >
      {children}
    </NativeBaseButton>
  );
};

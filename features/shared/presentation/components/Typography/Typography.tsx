import React from 'react';
import { Text, ITextProps } from 'native-base';

export interface TypographyProps extends ITextProps {
  variant?: 'h1' | 'h2' | 'body' | 'caption';
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  children,
  ...props
}) => {
  const variantStyles = {
    h1: { fontSize: 'xl', fontWeight: 'bold' },
    h2: { fontSize: 'lg', fontWeight: 'semibold' },
    body: { fontSize: 'md' },
    caption: { fontSize: 'sm', color: 'gray.500' },
  };

  return (
    <Text {...variantStyles[variant]} {...props}>
      {children}
    </Text>
  );
};

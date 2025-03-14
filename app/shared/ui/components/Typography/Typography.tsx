import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'body' | 'caption';
  children: React.ReactNode;
  style?: object;
}

export function Typography({ variant = 'body', children, style }: TypographyProps) {
  const variantStyle = styles[variant] || styles.body;
  
  return (
    <Text style={[variantStyle, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    color: '#666666',
  },
});

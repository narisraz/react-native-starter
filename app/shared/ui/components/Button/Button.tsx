import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  children: string;
  variant?: 'primary' | 'link';
}

export function Button({ onPress, children, variant = 'primary' }: ButtonProps) {
  const buttonStyle = variant === 'link' ? styles.linkButton : styles.primaryButton;
  const textStyle = variant === 'link' ? styles.linkText : styles.primaryText;

  return (
    <Pressable onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 6,
  },
  linkButton: {
    padding: 12,
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  linkText: {
    color: '#2196F3',
    fontSize: 16,
  },
});

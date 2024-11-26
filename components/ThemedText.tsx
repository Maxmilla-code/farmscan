import React from 'react';
import { Text, TextProps } from 'react-native';
import { FONT, SIZES } from '../constants/theme';

interface ThemedTextProps extends TextProps {
  variant?: 'regular' | 'medium' | 'bold';
  size?: keyof typeof SIZES;
  color?: string;
  className?: string;
}

const ThemedText: React.FC<ThemedTextProps> = ({
  children,
  variant = 'regular',
  size = 'medium',
  color = 'text-primary',
  className = '',
  ...props
}) => {
  const fontFamily = FONT[variant];
  const fontSize = SIZES[size];

  return (
    <Text
      className={`${color} ${className}`}
      style={[{ fontFamily, fontSize }]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemedText;


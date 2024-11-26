import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

interface IconSymbolProps {
  name: keyof typeof Feather.glyphMap;
  color?: string;
  size?: number;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({ name, color = COLORS.primary, size = 24 }) => {
  return (
    <View style={styles.container}>
      <Feather name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


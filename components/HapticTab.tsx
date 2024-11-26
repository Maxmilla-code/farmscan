import React from 'react';
import { TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import { COLORS } from '../constants/theme';

interface HapticTabProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  isActive?: boolean;
}

export const HapticTab: React.FC<HapticTabProps> = ({ onPress, children, style, isActive }) => {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.tab,
        isActive && styles.activeTab,
        style
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: COLORS.primary + '20', // 20% opacity
    borderRadius: 8,
  },
});


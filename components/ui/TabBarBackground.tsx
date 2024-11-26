import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const TabBarBackground: React.FC = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightWhite,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray2,
    paddingBottom: 5, // To account for iPhone's home indicator
    paddingTop: 10,
  },
});

export default TabBarBackground;


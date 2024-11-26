import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import ThemedText from './ThemedText';
import { COLORS } from '../constants/theme';

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, showBackButton = false }) => {
  const router = useRouter();

  return (
    <View className="bg-white py-4 px-6 flex-row items-center justify-between border-b border-gray-200">
      {showBackButton ? (
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.primary} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}
      <ThemedText variant="bold" size="large" color="text-primary" className="flex-1 text-center">
        {title}
      </ThemedText>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default AppHeader;


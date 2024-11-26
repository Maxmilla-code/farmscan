import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Camera } from 'lucide-react-native';
import ThemedText from './ThemedText';

const PlantScannerCard = () => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      className="bg-primary rounded-lg p-4 mb-4 flex-row items-center"
      onPress={() => router.push('/scanner')}
    >
      <View className="bg-white rounded-full p-2 mr-4">
        <Camera size={24} color="#2B9348" />
      </View>
      <View className="flex-1">
        <ThemedText variant="bold" size="large" color="text-white">
          Plant Scanner
        </ThemedText>
        <ThemedText variant="regular" size="small" color="text-white">
          Scan and identify plant diseases instantly
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default PlantScannerCard;


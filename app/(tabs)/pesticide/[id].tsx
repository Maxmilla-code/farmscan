import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ThemedText from '../../../components/ThemedText';
import { pesticides, pesticideTypes } from '../../../constants/appData';

export default function PesticideDetailScreen() {
  const { id } = useLocalSearchParams();
  const pesticide = pesticides.find(p => p.id === id);
  const pesticideType = pesticideTypes.find(type => type.id === pesticide.type);

  if (!pesticide) {
    return (
      <View className="flex-1 justify-center items-center">
        <ThemedText variant="bold" size="large" color="text-primary">
          Pesticide not found
        </ThemedText>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-lightWhite">
      <Image source={pesticide.image} className="w-full h-64" resizeMode="cover" />
      <View className="p-4">
        <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-2">
          {pesticide.name}
        </ThemedText>
        <View className="bg-gray-200 self-start rounded-full px-3 py-1 mb-4">
          <ThemedText variant="medium" size="small" color="text-gray">
            {pesticideType.name}
          </ThemedText>
        </View>
        <ThemedText variant="regular" size="medium" color="text-gray" className="mb-4">
          {pesticide.fullDescription}
        </ThemedText>
        <ThemedText variant="bold" size="large" color="text-secondary" className="mb-2">
          Application Instructions
        </ThemedText>
        <ThemedText variant="regular" size="medium" color="text-gray" className="mb-4">
          {pesticide.application}
        </ThemedText>
        <ThemedText variant="bold" size="large" color="text-secondary" className="mb-2">
          Manufacturer
        </ThemedText>
        <ThemedText variant="regular" size="medium" color="text-gray">
          {pesticide.manufacturer}
        </ThemedText>
      </View>
    </ScrollView>
  );
}


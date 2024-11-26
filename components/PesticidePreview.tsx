import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from './ThemedText';
import { pesticides } from '../constants/appData';

const PesticidePreview = () => {
  const router = useRouter();

  return (
    <View className="mb-4">
      <ThemedText variant="bold" size="large" color="text-secondary" className="mb-2">
        Featured Pesticides
      </ThemedText>
      {pesticides.slice(0, 2).map((pesticide) => (
        <TouchableOpacity 
          key={pesticide.id} 
          className="bg-white rounded-lg shadow-md p-4 mb-2 flex-row items-center"
          onPress={() => router.push(`/pesticide/${pesticide.id}`)}
        >
          <Image source={pesticide.image} className="w-16 h-16 rounded-full mr-4" resizeMode="cover" />
          <View className="flex-1">
            <ThemedText variant="bold" size="medium" color="text-primary" className="mb-1">
              {pesticide.name}
            </ThemedText>
            <ThemedText variant="regular" size="small" color="text-gray" numberOfLines={2}>
              {pesticide.description}
            </ThemedText>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => router.push('/pesticides')}>
        <ThemedText variant="medium" size="small" color="text-primary" className="text-right">
          View all pesticides →
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default PesticidePreview;


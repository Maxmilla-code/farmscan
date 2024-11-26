import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from '../../components/ThemedText';
import { pesticides, pesticideTypes } from '../../constants/appData';

export default function PesticidesListScreen() {
  const [selectedType, setSelectedType] = useState(null);
  const router = useRouter();

  const filteredPesticides = selectedType
    ? pesticides.filter(pesticide => pesticide.type === selectedType)
    : pesticides;

  const renderTypeItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedType(item.id === selectedType ? null : item.id)}
      className={`px-4 py-2 rounded-full mr-2 ${
        item.id === selectedType ? 'bg-primary' : 'bg-gray-200'
      }`}
    >
      <ThemedText
        variant="medium"
        size="small"
        color={item.id === selectedType ? 'text-white' : 'text-gray'}
      >
        {item.name}
      </ThemedText>
    </TouchableOpacity>
  );

  const renderPesticideItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/pesticide/${item.id}`)}
      className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
    >
      <Image source={item.image} className="w-full h-48" resizeMode="cover" />
      <View className="p-4">
        <ThemedText variant="bold" size="large" color="text-primary" className="mb-2">
          {item.name}
        </ThemedText>
        <ThemedText variant="regular" size="small" color="text-gray" numberOfLines={2}>
          {item.shortDescription}
        </ThemedText>
        <View className="mt-2">
          <ThemedText variant="medium" size="xSmall" color="text-gray2">
            {pesticideTypes.find(type => type.id === item.type).name}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-lightWhite p-4">
      <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-4">
        Medicines & Pesticides
      </ThemedText>
      <FlatList
        data={pesticideTypes}
        renderItem={renderTypeItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4"
      />
      <FlatList
        data={filteredPesticides}
        renderItem={renderPesticideItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


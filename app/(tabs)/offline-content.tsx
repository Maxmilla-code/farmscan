import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FileText, Download } from 'lucide-react-native';
import ThemedText from '../../components/ThemedText';
import { offlineContent } from '../../constants/appData';
import { COLORS } from '../../constants/theme';

export default function OfflineContentScreen() {
  const router = useRouter();

  const renderContentItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Handle opening the offline content
        console.log(`Opening offline content: ${item.title}`);
      }}
      className="bg-white rounded-lg shadow-md mb-4 p-4 flex-row items-center"
    >
      <View className="bg-primary rounded-full p-2 mr-4">
        <FileText size={24} color={COLORS.white} />
      </View>
      <View className="flex-1">
        <ThemedText variant="bold" size="medium" color="text-primary">
          {item.title}
        </ThemedText>
        <ThemedText variant="regular" size="small" color="text-gray">
          {item.type} • {item.size}
        </ThemedText>
        <ThemedText variant="regular" size="xSmall" color="text-gray2">
          Last updated: {item.lastUpdated}
        </ThemedText>
      </View>
      <TouchableOpacity
        onPress={() => {
          // Handle downloading or updating the content
          console.log(`Downloading/updating content: ${item.title}`);
        }}
        className="bg-secondary rounded-full p-2"
      >
        <Download size={20} color={COLORS.white} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-lightWhite p-4">
      <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-4">
        Offline Content
      </ThemedText>
      <FlatList
        data={offlineContent}
        renderItem={renderContentItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


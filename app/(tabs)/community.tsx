import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MessageCircle, Plus } from 'lucide-react-native';
import ThemedText from '../../components/ThemedText';
import { forumThreads } from '../../constants/appData';
import { COLORS } from '../../constants/theme';

export default function CommunityForumScreen() {
  const router = useRouter();

  const renderThreadItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Navigate to thread detail screen
        console.log(`Navigating to thread: ${item.title}`);
      }}
      className="bg-white rounded-lg shadow-md mb-4 p-4"
    >
      <ThemedText variant="bold" size="medium" color="text-primary" className="mb-2">
        {item.title}
      </ThemedText>
      <View className="flex-row justify-between items-center">
        <ThemedText variant="regular" size="small" color="text-gray">
          By {item.author}
        </ThemedText>
        <View className="flex-row items-center">
          <MessageCircle size={16} color={COLORS.gray} className="mr-1" />
          <ThemedText variant="regular" size="small" color="text-gray">
            {item.replies} replies
          </ThemedText>
        </View>
      </View>
      <ThemedText variant="regular" size="xSmall" color="text-gray2" className="mt-2">
        Last activity: {new Date(item.lastActivity).toLocaleString()}
      </ThemedText>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-lightWhite p-4">
      <View className="flex-row justify-between items-center mb-4">
        <ThemedText variant="bold" size="xxLarge" color="text-primary">
          Community Forum
        </ThemedText>
        <TouchableOpacity
          onPress={() => {
            // Navigate to create new thread screen
            console.log('Navigating to create new thread screen');
          }}
          className="bg-primary rounded-full p-2"
        >
          <Plus size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={forumThreads}
        renderItem={renderThreadItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


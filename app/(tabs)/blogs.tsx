import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from '../../components/ThemedText';
import AppHeader from '../../components/AppHeader';
import { blogPosts, blogCategories } from '../../constants/appData';
import { COLORS } from '../../constants/theme';

export default function BlogListScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.id === selectedCategory ? null : item.id)}
      className={`px-4 py-2 rounded-full mr-2 ${
        item.id === selectedCategory ? 'bg-primary' : 'bg-gray-200'
      }`}
    >
      <ThemedText
        variant="medium"
        size="small"
        color={item.id === selectedCategory ? 'text-white' : 'text-gray'}
      >
        {item.name}
      </ThemedText>
    </TouchableOpacity>
  );

  const renderBlogItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/blog/${item.id}`)}
      className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
    >
      <Image source={item.image} className="w-full h-48" resizeMode="cover" />
      <View className="p-4">
        <ThemedText variant="bold" size="large" color="text-primary" className="mb-2">
          {item.title}
        </ThemedText>
        <ThemedText variant="regular" size="small" color="text-gray" numberOfLines={2}>
          {item.excerpt}
        </ThemedText>
        <View className="flex-row justify-between items-center mt-2">
          <ThemedText variant="medium" size="xSmall" color="text-gray2">
            {item.author}
          </ThemedText>
          <ThemedText variant="medium" size="xSmall" color="text-gray2">
            {item.date}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-background">
      <AppHeader title="Agricultural Blogs" />
      <FlatList
        ListHeaderComponent={
          <FlatList
            data={blogCategories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="py-4"
          />
        }
        data={filteredPosts}
        renderItem={renderBlogItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}


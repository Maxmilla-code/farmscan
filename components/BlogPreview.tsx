import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from './ThemedText';
import { blogPosts } from '../constants/appData';

const BlogPreview = () => {
  const router = useRouter();

  return (
    <View className="mb-4">
      <ThemedText variant="bold" size="large" color="text-secondary" className="mb-2">
        Latest Blog Posts
      </ThemedText>
      {blogPosts.slice(0, 2).map((post) => (
        <TouchableOpacity 
          key={post.id} 
          className="bg-white rounded-lg shadow-md p-4 mb-2"
          onPress={() => router.push(`/blog/${post.id}`)}
        >
          <Image source={post.image} className="w-full h-32 rounded-md mb-2" resizeMode="cover" />
          <ThemedText variant="bold" size="medium" color="text-primary" className="mb-1">
            {post.title}
          </ThemedText>
          <ThemedText variant="regular" size="small" color="text-gray" numberOfLines={2}>
            {post.excerpt}
          </ThemedText>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => router.push('/blogs')}>
        <ThemedText variant="medium" size="small" color="text-primary" className="text-right">
          View all blogs →
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default BlogPreview;


import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Camera, BookOpen, Flask, Cloud } from 'lucide-react-native';
import ThemedText from '../../components/ThemedText';
import AppHeader from '../../components/AppHeader';
import { COLORS } from '../../constants/theme';

const FeatureButton = ({ icon, title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md"
  >
    {icon}
    <ThemedText variant="medium" size="small" color="text-primary" className="mt-2 text-center">
      {title}
    </ThemedText>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <AppHeader title="FarmScan+" />
      <ScrollView className="flex-1 p-4">
        <View className="mb-6">
          <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-2">
            Welcome, Farmer!
          </ThemedText>
          <ThemedText variant="regular" size="medium" color="text-gray">
            What would you like to do today?
          </ThemedText>
        </View>

        <View className="grid grid-cols-2 gap-4 mb-6">
          <FeatureButton
            icon={<Camera size={32} color={COLORS.primary} />}
            title="Scan Plant"
            onPress={() => router.push('/scanner')}
          />
          <FeatureButton
            icon={<BookOpen size={32} color={COLORS.primary} />}
            title="Read Blogs"
            onPress={() => router.push('/blogs')}
          />
          <FeatureButton
            icon={<Flask size={32} color={COLORS.primary} />}
            title="Pesticides"
            onPress={() => router.push('/pesticides')}
          />
          <FeatureButton
            icon={<Cloud size={32} color={COLORS.primary} />}
            title="Weather"
            onPress={() => router.push('/weather')}
          />
        </View>

        <View className="bg-white rounded-lg shadow-md p-4 mb-6">
          <ThemedText variant="bold" size="large" color="text-primary" className="mb-2">
            Latest Blog
          </ThemedText>
          <Image
            source={require('../../assets/images/blog-preview.webp')}
            className="w-full h-40 rounded-md mb-2"
            resizeMode="cover"
          />
          <ThemedText variant="medium" size="medium" color="text-gray" numberOfLines={2}>
            10 Tips for Sustainable Farming Practices
          </ThemedText>
          <TouchableOpacity onPress={() => router.push('/blogs')}>
            <ThemedText variant="medium" size="small" color="text-secondary" className="mt-2">
              Read More →
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg shadow-md p-4">
          <ThemedText variant="bold" size="large" color="text-primary" className="mb-2">
            Weather Forecast
          </ThemedText>
          <View className="flex-row justify-between">
            <View className="items-center">
              <ThemedText variant="medium" size="small" color="text-gray">
                Today
              </ThemedText>
              <ThemedText variant="bold" size="large" color="text-primary">
                28°C
              </ThemedText>
              <ThemedText variant="regular" size="small" color="text-gray">
                Sunny
              </ThemedText>
            </View>
            <View className="items-center">
              <ThemedText variant="medium" size="small" color="text-gray">
                Tomorrow
              </ThemedText>
              <ThemedText variant="bold" size="large" color="text-primary">
                26°C
              </ThemedText>
              <ThemedText variant="regular" size="small" color="text-gray">
                Partly Cloudy
              </ThemedText>
            </View>
          </View>
          <TouchableOpacity onPress={() => router.push('/weather')}>
            <ThemedText variant="medium" size="small" color="text-secondary" className="mt-2 text-right">
              Full Forecast →
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


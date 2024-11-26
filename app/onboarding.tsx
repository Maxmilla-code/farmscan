import { View, SafeAreaView, FlatList, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { useState, useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import ThemedText from '../components/ThemedText';
import { onboardingData } from '../constants/appData';

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const router = useRouter();
  const { width } = useWindowDimensions();

  const renderItem = ({ item }) => (
    <View style={{ width }} className="items-center px-5">
      <Animatable.View animation="bounceIn" duration={2000} className="w-3/4 h-3/4 mb-8 justify-center items-center">
        <Image
          source={item.image}
          className="w-full h-full"
          resizeMode="contain"
        />
      </Animatable.View>
      <ThemedText
        variant="bold"
        size="xxLarge"
        color="text-primary"
        className="text-center mb-2"
      >
        {item.title}
      </ThemedText>
      <ThemedText
        variant="regular"
        size="medium"
        color="text-gray"
        className="text-center px-5"
      >
        {item.description}
      </ThemedText>
    </View>
  );

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/signup');
    }
  };

  const handleSkip = () => {
    router.push('/signup');
  };

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
      />

      <View className="flex-row justify-between px-5 pb-10">
        <TouchableOpacity onPress={handleSkip}>
          <ThemedText
            variant="regular"
            size="medium"
            color="text-gray"
          >
            Skip
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          className="bg-primary px-5 py-2 rounded-full"
        >
          <ThemedText
            variant="bold"
            size="medium"
            color="text-white"
          >
            {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          </ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;


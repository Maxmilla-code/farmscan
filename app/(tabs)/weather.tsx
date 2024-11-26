import React from 'react';
import { View, FlatList } from 'react-native';
import ThemedText from '../../components/ThemedText';
import { weatherForecast } from '../../constants/appData';

export default function WeatherForecastScreen() {
  const renderWeatherItem = ({ item }) => (
    <View className="bg-white rounded-lg shadow-md mb-4 p-4 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <ThemedText variant="bold" size="large" color="text-primary" className="mr-2">
          {item.icon}
        </ThemedText>
        <ThemedText variant="medium" size="medium" color="text-gray">
          {item.day}
        </ThemedText>
      </View>
      <View className="flex-row items-center">
        <ThemedText variant="bold" size="large" color="text-primary" className="mr-2">
          {item.temp}°C
        </ThemedText>
        <ThemedText variant="regular" size="small" color="text-gray">
          {item.condition}
        </ThemedText>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-lightWhite p-4">
      <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-4">
        7-Day Weather Forecast
      </ThemedText>
      <FlatList
        data={weatherForecast}
        renderItem={renderWeatherItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


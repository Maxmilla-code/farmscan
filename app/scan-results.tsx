import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { AlertTriangle, Book } from 'lucide-react-native';
import ThemedText from '../components/ThemedText';

// Mock data for demonstration
const mockDiagnosis = {
  disease: "Tomato Late Blight",
  severity: "High",
  description: "Late blight is a devastating disease of tomato and potato, caused by the fungus-like oomycete pathogen Phytophthora infestans. It can destroy entire fields within days when environmental conditions are favorable.",
};

export default function ScanResultsScreen() {
  const { image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-lightWhite">
      <View className="p-4">
        <Image source={{ uri: image }} className="w-full h-64 rounded-lg mb-4" />
        
        <View className="bg-white rounded-lg p-4 mb-4">
          <View className="flex-row items-center mb-2">
            <AlertTriangle size={24} color="#FF6B6B" className="mr-2" />
            <ThemedText variant="bold" size="large" color="text-primary">
              Diagnosis: {mockDiagnosis.disease}
            </ThemedText>
          </View>
          <ThemedText variant="medium" size="medium" color="text-gray" className="mb-2">
            Severity: {mockDiagnosis.severity}
          </ThemedText>
          <ThemedText variant="regular" size="small" color="text-gray">
            {mockDiagnosis.description}
          </ThemedText>
        </View>
        
        <View className="flex-row justify-between">
          <TouchableOpacity 
            onPress={() => router.push('/disease-details')} 
            className="bg-primary flex-row items-center justify-center rounded-lg p-3 flex-1 mr-2"
          >
            <Book size={20} color="white" className="mr-2" />
            <ThemedText variant="bold" size="medium" color="text-white">
              Read More
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => router.push('/treatments')} 
            className="bg-secondary flex-row items-center justify-center rounded-lg p-3 flex-1 ml-2"
          >
            <AlertTriangle size={20} color="white" className="mr-2" />
            <ThemedText variant="bold" size="medium" color="text-white">
              View Treatments
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


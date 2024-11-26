import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from '../../components/ThemedText';
import Input from '../../components/input';

const VerifyScreen = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleVerify = () => {
    router.push('/home');
  };

  return (
    <View className="flex-1 p-4 bg-lightWhite">
      <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-4">
        Verify Your Number
      </ThemedText>
      <ThemedText variant="regular" size="medium" color="text-gray" className="mb-6">
        We've sent a verification code to your phone number. Please enter it below.
      </ThemedText>
      <Input
        label="Verification Code"
        value={code}
        onChangeText={setCode}
        placeholder="Enter the 6-digit code"
        keyboardType="number-pad"
      />
      <TouchableOpacity
        className="bg-primary p-3 rounded-md items-center mt-4"
        onPress={handleVerify}
      >
        <ThemedText variant="bold" size="medium" color="text-white">
          Verify
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <ThemedText variant="medium" size="small" color="text-primary" className="mt-4 text-center">
          Didn't receive the code? Resend
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyScreen;


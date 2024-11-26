import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from '../../components/ThemedText';
import Input from '../../components/input';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/verify');
  };

  return (
    <View className="flex-1 p-4 bg-lightWhite">
      <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-8">
        Sign Up
      </ThemedText>
      <Input
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter your full name"
      />
      <Input
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        className="bg-primary p-3 rounded-md items-center mt-4"
        onPress={handleSignUp}
      >
        <ThemedText variant="bold" size="medium" color="text-white">
          Sign Up
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login')}>
        <ThemedText variant="medium" size="small" color="text-primary" className="mt-4 text-center">
          Already have an account? Log in
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;


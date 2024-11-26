import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from '../../components/ThemedText';
import Input from '../../components/input';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    router.push('/home');
  };

  return (
    <View className="flex-1 p-4 bg-lightWhite">
      <ThemedText variant="bold" size="xxLarge" color="text-primary" className="mb-8">
        Log In
      </ThemedText>
      <Input
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-primary p-3 rounded-md items-center mt-4"
        onPress={handleLogin}
      >
        <ThemedText variant="bold" size="medium" color="text-white">
          Log In
        </ThemedText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/signup')}>
        <ThemedText variant="medium" size="small" color="text-primary" className="mt-4 text-center">
          Don't have an account? Sign up
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


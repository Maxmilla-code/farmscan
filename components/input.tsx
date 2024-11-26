import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import ThemedText from './ThemedText';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <View className="mb-4">
      <ThemedText variant="medium" size="small" color="text-gray" className="mb-1">
        {label}
      </ThemedText>
      <TextInput
        className={`border rounded-md p-2 text-gray ${error ? 'border-red-500' : 'border-gray-300'}`}
        placeholderTextColor="#83829A"
        {...props}
      />
      {error && (
        <ThemedText variant="regular" size="small" color="text-red-500" className="mt-1">
          {error}
        </ThemedText>
      )}
    </View>
  );
};

export default Input;


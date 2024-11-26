import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import ThemedText from './ThemedText';
import { notifications } from '../constants/appData';
import { Bell } from 'lucide-react-native';

const NotificationList = () => {
  const router = useRouter();

  return (
    <View className="mb-4">
      <ThemedText variant="bold" size="large" color="text-secondary" className="mb-2">
        Recent Notifications
      </ThemedText>
      {notifications.slice(0, 3).map((notification) => (
        <TouchableOpacity 
          key={notification.id} 
          className="bg-white rounded-lg shadow-md p-4 mb-2"
          onPress={() => router.push(`/notification/${notification.id}`)}
        >
          <View className="flex-row items-center mb-2">
            <Bell size={16} color="#2B9348" className="mr-2" />
            <ThemedText variant="bold" size="medium" color="text-primary">
              {notification.title}
            </ThemedText>
          </View>
          <ThemedText variant="regular" size="small" color="text-gray" numberOfLines={2}>
            {notification.message}
          </ThemedText>
          <ThemedText variant="regular" size="xSmall" color="text-gray2" className="mt-1">
            {notification.timestamp.toLocaleDateString()}
          </ThemedText>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => router.push('/notifications')}>
        <ThemedText variant="medium" size="small" color="text-primary" className="text-right">
          View all notifications →
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationList;


import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Camera as CameraIcon, Upload, X } from 'lucide-react-native';
import ThemedText from '../../components/ThemedText';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setCapturedImage(result.assets[0].uri);
    }
  };

  const handleScan = () => {
    if (capturedImage) {
      router.push({
        pathname: '/scan-results',
        params: { image: capturedImage }
      });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <ThemedText>No access to camera</ThemedText>;
  }

  return (
    <View className="flex-1 bg-lightWhite">
      {capturedImage ? (
        <View className="flex-1">
          <Image source={{ uri: capturedImage }} className="flex-1" />
          <View className="absolute bottom-0 left-0 right-0 flex-row justify-around p-4 bg-black bg-opacity-50">
            <TouchableOpacity onPress={() => setCapturedImage(null)} className="items-center">
              <X size={24} color="white" />
              <ThemedText variant="medium" size="small" color="text-white">Retake</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleScan} className="items-center">
              <CameraIcon size={24} color="white" />
              <ThemedText variant="medium" size="small" color="text-white">Scan</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Camera 
          ref={cameraRef} 
          type={cameraType}
          className="flex-1"
        >
          <View className="flex-1 bg-transparent">
            <View className="absolute bottom-0 left-0 right-0 flex-row justify-around p-4 bg-black bg-opacity-50">
              <TouchableOpacity onPress={pickImage} className="items-center">
                <Upload size={24} color="white" />
                <ThemedText variant="medium" size="small" color="text-white">Upload</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity onPress={takePicture} className="items-center">
                <View className="w-16 h-16 border-4 border-white rounded-full items-center justify-center">
                  <View className="w-12 h-12 bg-white rounded-full" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCameraType(
                cameraType === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )} className="items-center">
                <CameraIcon size={24} color="white" />
                <ThemedText variant="medium" size="small" color="text-white">Flip</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
}


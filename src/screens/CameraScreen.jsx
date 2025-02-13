import { useState, useRef, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (!cameraRef.current || isProcessing) return;

    setIsProcessing(true);
    const photo = await cameraRef.current.takePictureAsync({ quality: 0.8, base64: true });

    const result = await analyzeImage(photo.base64);

    setIsProcessing(false);
    if (result) {
      navigation.replace("MealScan", { analysisResult: result });
    }
  };

  // // AI API ilə şəkili analiz edir
  // const analyzeImage = async (base64) => {
  //   try {
  //     const response = await fetch("https://your-ai-api.com/analyze", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ image: base64 }),
  //     });

  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("AI Analiz Xətası:", error);
  //     return null;
  //   }
  // };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <View><Text>Kamera icazəsi rədd edildi</Text></View>;

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} />
      <TouchableOpacity style={styles.captureButton} onPress={takePicture} disabled={isProcessing}>
        {isProcessing ? <ActivityIndicator color="#fff" /> : <Ionicons name="camera" size={32} color="#fff" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  captureButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: Colors["main-green"],
    padding: 15,
    borderRadius: 50,
  },
});

export default CameraScreen;

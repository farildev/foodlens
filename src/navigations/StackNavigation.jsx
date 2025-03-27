import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import CameraScreen from "@/screens/CameraScreen";
import FoodDetailScreen from "@/screens/FoodDetailScreen";
const StackNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="tabs" options={{ headerShown: false }} component={TabNavigation} />
      <Screen name="camera" options={{ headerShown: false }} component={CameraScreen} />
      <Screen name="FoodDetail" options={{ headerShown: false }} component={FoodDetailScreen} />
    </Navigator>
  )
}

export default StackNavigation

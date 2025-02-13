import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import CameraScreen from "@/screens/CameraScreen";
const StackNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="tabs" options={{headerShown : false}} component={TabNavigation} />
      <Screen name="camera" options={{headerShown : false}} component={CameraScreen} />
    </Navigator>
  )
}

export default StackNavigation
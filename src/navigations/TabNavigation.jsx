import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import MealScanScreen from "@/screens/MealScanScreen";
import SettingsScreen from "@/screens/SettingsScreen";

const { Navigator, Screen, Group } = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen name="scan" component={MealScanScreen} />
      <Screen name="settings" component={SettingsScreen} />
    </Navigator>
  )
}

export default TabNavigation
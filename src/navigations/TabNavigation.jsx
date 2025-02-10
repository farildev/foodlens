import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import MealScanScreen from "@/screens/MealScanScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import HomeIcon from "@/assets/icons/HomeIcon";
import ScanIcon from "@/assets/icons/ScanIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import Fonts from "@/constants/Fonts";

const { Navigator, Screen, Group } = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon />
          ),
          tabBarLabelStyle : {
            color : "#000",
            fontFamily : Fonts['500Medium']
          }
        }}
      />
      <Screen
        name="Scan"
        component={MealScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ScanIcon />
          ),
          tabBarLabelStyle : {
            color : "#000",
            fontFamily : Fonts['500Medium']
          }
        }}
      />
      <Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SettingsIcon />
          ),
          tabBarLabelStyle : {
            color : "#000",
            fontFamily : Fonts['500Medium']
          }
        }}
      />
    </Navigator>
  )
}

export default TabNavigation
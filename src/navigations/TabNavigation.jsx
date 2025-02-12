import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import MealScanScreen from "@/screens/MealScanScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import HomeIcon from "@/assets/icons/HomeIcon";
import ScanIcon from "@/assets/icons/ScanIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import Fonts from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 0,
          borderColor: "none"
        },
        headerShadowVisible: false,
        shadowOffset: { height: 0, width: 0 },
        tabBarStyle: {
          borderTopWidth: 1,
          elevation: 0,
          paddingBottom: 0,
          paddingTop: 0,
        },
        tabBarLabelStyle: {
          fontFamily: Fonts["500Medium"],
          fontSize: 11,
        },
        tabBarActiveTintColor: Colors["main-green"],
        tabBarInactiveTintColor: "#a6a6a6",
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? Colors["main-green"] : "#a6a6a6"} />
          ),
        }}
      />
      <Screen
        name="Scan"
        component={MealScanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <ScanIcon color={focused ? Colors["main-green"] : "#a6a6a6"} />
          ),
        }}
      />
      <Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <SettingsIcon color={focused ? Colors["main-green"] : "#a6a6a6"} />
          ),
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;

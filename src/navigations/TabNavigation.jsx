import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import HomeIcon from "@/assets/icons/HomeIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import AssistantIcon from "@/assets/icons/AssistantIcon";
import FoodIcon from "@/assets/icons/FoodIcon";
import Fonts from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import AssistantScreen from "@/screens/FoodScreen";

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
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? Colors["main-green"] : "#a6a6a6"} />
          ),
        }}
      />
      <Screen
        name="Foods"
        component={AssistantScreen}
        options={{
          headerTitle: "Foods",
          tabBarIcon: ({ focused }) => (
            <FoodIcon color={focused ? Colors["main-green"] : "#a6a6a6"} />
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

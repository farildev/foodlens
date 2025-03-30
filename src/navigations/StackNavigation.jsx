import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import FoodDetailScreen from "@/screens/FoodDetailScreen";
import FavoriteMealsScreen from "@/screens/FavoriteMealsScreen";
import Fonts from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
const StackNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator screenOptions={{
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
    }}>
      <Screen name="tabs" options={{ headerShown: false }} component={TabNavigation} />
      <Screen name="FavoriteMeals" options={{ headerTitle: "Favorite Meals" }} component={FavoriteMealsScreen} />
      <Screen name="FoodDetail" options={{ headerShown: false }} component={FoodDetailScreen} />
    </Navigator>
  )
}

export default StackNavigation

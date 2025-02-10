import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
const StackNavigation = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen name="tabs" options={{headerShown : false}} component={TabNavigation} />
    </Navigator>
  )
}

export default StackNavigation
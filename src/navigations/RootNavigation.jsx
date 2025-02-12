import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/store/slices/themeSlice";
import StackNavigation from "./StackNavigation";
import { StatusBar } from "expo-status-bar";

const RootNavigation = () => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (mode === 'system') {
      dispatch(setMode(colorScheme === 'dark' ? 'dark' : 'light'));
    }
  }, [colorScheme, mode, dispatch]);

  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      text: Colors.dark.text,
      cardItem: Colors.dark.cardItem,
      border: Colors.dark.border,
      tabBarBg: Colors.dark.tabBarBg,
      button: Colors.mainColor,
      placeholder: Colors.light.placeholder
    },
  };

  const customLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      text: Colors.light.text,
      cardItem: Colors.light.cardItem,
      border: Colors.light.border,
      tabBarBg: Colors.light.tabBarBg,
      button: Colors.light.button,
      placeholder: Colors.dark.placeholder
    },
  };

  const theme = mode === 'dark' ? customDarkTheme : customLightTheme;

  return (
    <NavigationContainer theme={theme}>
      <StackNavigation />
      <StatusBar style={mode === "dark" ? 'light' : 'dark'} />
    </NavigationContainer>
  )
}

export default RootNavigation;
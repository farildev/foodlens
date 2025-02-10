import {
  useFonts,
  DMSans_100Thin,
  DMSans_200ExtraLight,
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  DMSans_800ExtraBold,
  DMSans_900Black,
} from "@expo-google-fonts/dm-sans";
import { useState, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const FontLoader = ({ children }) => {
  let [fontsLoaded] = useFonts({
    DMSans_100Thin,
    DMSans_200ExtraLight,
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    DMSans_800ExtraBold,
    DMSans_900Black,
  });

  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !isAppReady) {
    return null;
  }

  return children;
};

export default FontLoader;

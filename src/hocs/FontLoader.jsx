import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

const FontLoader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = useCallback(async () => {
    try {
      await Font.loadAsync({
        "SFPro-Thin": require("../assets/fonts/SF-Pro-Display-Ultralight.otf"),
        "SFPro-Light": require("../assets/fonts/SF-Pro-Display-Light.otf"),
        "SFPro-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
        "SFPro-Medium": require("../assets/fonts/SF-Pro-Display-Medium.otf"),
        "SFPro-Semibold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
        "SFPro-Bold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn("Font yüklenirken hata oldu:", error);
    }
  }, []);

  useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  if (!fontsLoaded) {
    return null;
  }

  return children;
};

export default FontLoader;

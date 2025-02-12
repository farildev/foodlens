import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { forwardRef, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/store/slices/themeSlice";
import { Colors } from "@/constants/Colors";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";

const ThemeSheetModal = forwardRef(({ }, ref) => {
  const { colors } = useTheme();
  const snapPoints = ["50%"];
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const handleThemeChange = (mode) => {
    dispatch(setMode(mode));
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={ref}
      index={-1}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      handleIndicatorStyle={{
        backgroundColor: colors.text,
        width: 40,
        height: 4,
      }}
      handleStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <View style={[styles.sheetContainer, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.selectElement}
          onPress={() => handleThemeChange("dark")}
        >
          <View style={styles.sheetElementContainer}>
            <Feather name="moon" size={18} color={colors.text} />
            <Text style={[styles.sheetElementText, { color: colors.text }]}>Dark Mode</Text>
          </View>
          {mode === "dark" && <Feather name="check" size={24} color={Colors.mainColor} />}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.selectElement}
          onPress={() => handleThemeChange("light")}
        >
          <View style={styles.sheetElementContainer}>
            <Feather name="sun" size={18} color={colors.text} />
            <Text style={[styles.sheetElementText, { color: colors.text }]}>Light Mode</Text>
          </View>
          {mode === "light" && <Feather name="check" size={24} color={Colors.mainColor} />}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.selectElement}
          onPress={() => handleThemeChange("system")}
        >
          <View style={styles.sheetElementContainer}>
            <Feather name="settings" size={18} color={colors.text} />
            <Text style={[styles.sheetElementText, { color: colors.text }]}>System preferences</Text>
          </View>
          {mode === "system" && <Feather name="check" size={24} color={Colors.mainColor} />}
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

export default ThemeSheetModal;

const styles = StyleSheet.create({
  sheetContainer: {
    padding: 16,
    flexDirection: "column",
    flex: 1,
    gap: 12,
  },
  selectElement: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  sheetElementContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  sheetElementText: {
    fontSize: 16,
  },
});

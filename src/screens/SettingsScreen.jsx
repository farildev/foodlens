import Fonts from "@/constants/Fonts";
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Pressable, Button, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { useCallback, useRef, useMemo } from "react";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
const SettingsScreen = () => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ['25%', '50%'];

  const renderBackdrop = useCallback((props) => {
    return <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
  })

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.expand();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <View style={styles.container}>

      <View style={styles.listContainer}>
        <Pressable onPress={handlePresentModalPress} style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <View style={styles.listInnerContainer}>
            <View style={[styles.iconContainer, { backgroundColor: Colors["main-green"] }]}>
              <Feather name="moon" size={18} color="#fff" />
            </View>
            <Text style={styles.listText}>Theme mode</Text>
          </View>
          <Feather name="chevron-right" size={20} />
        </Pressable>
        <Pressable style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <View style={styles.listInnerContainer}>
            <View style={[styles.iconContainer, { backgroundColor: "#c50000" }]}>
              <Ionicons name="language-outline" size={18} color="#fff" />
            </View>
            <Text style={styles.listText}>Change Language</Text>
          </View>
          <Feather name="chevron-right" size={20} />
        </Pressable>
        <Pressable style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <View style={styles.listInnerContainer}>
            <View style={[styles.iconContainer, { backgroundColor: "#ff7700" }]}>
              <MaterialIcons name="security" size={18} color="#fff" />
            </View>
            <Text style={styles.listText}>Privacy Policy</Text>
          </View>
          <Feather name="chevron-right" size={20} />
        </Pressable>
        <Pressable style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <View style={styles.listInnerContainer}>
            <View style={[styles.iconContainer, { backgroundColor: "#0088FF" }]}>
              <MaterialIcons name="question-mark" size={18} color="#fff" />
            </View>
            <Text style={styles.listText}>F.A.Q</Text>
          </View>
          <Feather name="chevron-right" size={20} />
        </Pressable>
      </View>
      <View style={styles.version}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        index={-1}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
        enablePanDownToClose={true}
      >
        <View style={styles.sheetContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectElement}>
            <View style={styles.sheetElementContainer}>
              <Feather name="moon" size={18} color="#000000" />
              <Text style={styles.sheetElementText}>Dark Mode</Text>
            </View>
            <Feather name="check" size={18} color={Colors.mainColor} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectElement}>
            <View style={styles.sheetElementContainer}>
              <Feather name="sun" size={18} color="#000000" />
              <Text style={styles.sheetElementText}>Light Mode</Text>
            </View>
            <Feather name="check" size={18} color={Colors.mainColor} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.selectElement}>
            <View style={styles.sheetElementContainer}>
              <Feather name="settings" size={18} color="#000000" />
              <Text style={styles.sheetElementText}>System preferences</Text>
            </View>
            <Feather name="check" size={18} color={Colors.mainColor} />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View >
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  listContainer: {
    flex: 1,
    marginTop: 12,
    flexDirection: 'column',
    gap: 8
  },
  listStyle: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  listInnerContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  listText: {
    fontFamily: Fonts["500Medium"],
    fontSize: 16,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 8
  },
  version: {
    paddingVertical: 16
  },
  versionText: {
    fontSize: 14,
    color: "#666666",
    textAlign: 'center',
    fontFamily: Fonts["500Medium"]
  },
  sheetContainer: {
    padding: 16,
    flexDirection : 'column',
    gap : 12
  },
  selectElement : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    padding: 8
  },
  sheetElementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sheetElementText: {
    fontFamily: Fonts["500Medium"],
    fontSize: 16
  }
});

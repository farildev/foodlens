import Fonts from "@/constants/Fonts";
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
import { useCallback, useRef, useMemo } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
const SettingsScreen = () => {
  const { colors } = useTheme();
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <View style={styles.container}>
      <BottomSheetModal
        snapPoints={["50%"]}
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        style={{ backgroundColor: 'red' }}
        index={-1}
        enablePanDownToClose={true} 
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
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
  }
});

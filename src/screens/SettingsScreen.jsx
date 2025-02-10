import Fonts from "@/constants/Fonts";
import { StyleSheet, Text, View, Switch } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

const SettingsScreen = () => {
  const { colors } = useTheme(); // `colors` dəyərləri burada gəlir
  const [change, setChange] = useState(false);
  return (
    <View style={styles.container}>
      <View style={[styles.listStyle, { borderBottomColor: colors.border }]}>
        <Text style={styles.listText}>Change Theme</Text>
        <Switch value={change} onValueChange={() => setChange(!change)} />
      </View>
      <View style={[styles.listStyle, { borderBottomColor: colors.border }]}>
        <Text style={styles.listText}>Change Theme</Text>
        <Switch value={change} onValueChange={() => setChange(!change)} />
      </View>
      <View style={[styles.listStyle, { borderBottomColor: colors.border }]}>
        <Text style={styles.listText}>Change Theme</Text>
        <Switch value={change} onValueChange={() => setChange(!change)} />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  listText: {
    fontFamily: Fonts["500Medium"],
    fontSize: 16,
  },
});

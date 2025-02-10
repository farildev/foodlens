import Fonts from "@/constants/Fonts";
import Feather from '@expo/vector-icons/Feather'
import { StyleSheet, Text, View, Switch, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

const SettingsScreen = () => {
  const { colors } = useTheme(); // `colors` dəyərləri burada gəlir
  const [change, setChange] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <Text style={styles.listText}>Dark mode</Text>
          <Switch value={change} onValueChange={() => setChange(!change)} />
        </View>
        <Pressable style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <Text style={styles.listText}>Change language</Text>
          <Feather name="chevron-right" size={20} />
        </Pressable>
        <Pressable style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <Text style={styles.listText}>Privacy Policy</Text>
          <Feather name="chevron-right" size={20} />
        </Pressable>
        <Pressable style={[styles.listStyle, { borderBottomColor: colors.border }]}>
          <Text style={styles.listText}>FAQ</Text>
          <Feather name="chevron-right" size={20} />
        </Pressable>
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
  listContainer : {
    marginTop : 12
  },
  listStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    height: 56
  },
  listText: {
    fontFamily: Fonts["500Medium"],
    fontSize: 16,
  },
});

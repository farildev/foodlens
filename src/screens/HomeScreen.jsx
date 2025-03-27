import Fonts from '@/constants/Fonts';
import FoodSlider from '@/components/common/FoodSlider';
import { StyleSheet, View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetRecipesByATagQuery } from '@/store/services/foodService';
import { useNavigation } from '@react-navigation/native';
import SearchIcon from '@/assets/icons/SearchIcon';
import Logo from '@/assets/images/logo';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { data, isFetching, error } = useGetRecipesByATagQuery("Italian")
  const { data: asianData, isFetching: asianFetching } = useGetRecipesByATagQuery("Asian")
  const { data: allDeserts, isFetching: dessertFetching } = useGetRecipesByATagQuery("Dessert")
  const italianFoods = data?.recipes || [];
  const asianFoods = asianData?.recipes || [];
  const deserts = allDeserts?.recipes || [];

  if (error) {
    return <Text style={styles.errorText}>Failed to load recipes</Text>
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View style={[styles.logoContainer, { backgroundColor: colors.background }]}>
          <View style={styles.logo}>
            <Logo width={35} />
            <Text style={styles.logoText}>Foody</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Foods")} activeOpacity={0.8} style={styles.searchButton}>
            <SearchIcon color={"white"} />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>Explore countries tastes</Text>
        <View style={{ marginTop: 24 }}>
          <FoodSlider navigation={navigation} foods={italianFoods} isFetching={isFetching} title="🇮🇹 Italian Foods" />
        </View>
        <View>
          <FoodSlider navigation={navigation} foods={asianFoods} isFetching={asianFetching} title="Asian Foods" />
        </View>
        <View>
          <FoodSlider navigation={navigation} foods={deserts} isFetching={dessertFetching} title="Desserts" />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  heading: {
    fontSize: 24,
    fontFamily: Fonts['600SemiBold'],
    color: "white",
    marginTop: 24
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  logoText: {
    fontSize: 24,
    fontFamily: Fonts['600SemiBold'],
    color: "white"
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchButton: {
    backgroundColor: Colors['main-green'],
    padding: 8,
    borderRadius: "50%"
  },
  errorText: {
    fontFamily: Fonts['500Medium'],
    color: "#727272"
  }
})

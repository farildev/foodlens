import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useGetRecipeByIdQuery } from '@/store/services/foodService';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fonts from '@/constants/Fonts';

const FoodDetailScreen = ({ route }) => {
  const { canGoBack, goBack } = useNavigation();
  const { recipe } = route.params;
  const { data } = useGetRecipeByIdQuery(recipe.id);

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.8} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{ uri: data?.image }}
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{data?.name}</Text>
        <Text style={styles.instructions}>{data?.instructions}</Text>
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          {data?.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>{ingredient}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: '100%',
    height: '40%',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 64,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    zIndex: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentWrapper: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts['600SemiBold'],
    color: 'white',
  },
  instructions: {
    fontSize: 16,
    fontFamily: Fonts['400Regular'],
    color: 'white',
    marginTop: 16,
  },
  ingredientsWrapper: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 16,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontFamily: Fonts['600SemiBold'],
    color: 'white',
  },
  ingredient: {
    fontSize: 14,
    fontFamily: Fonts['400Regular'],
    color: '#b0b0b0',
  },
});

export default FoodDetailScreen;

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import TimerIcon from '@/assets/icons/TimerIcon';
import Fonts from '@/constants/Fonts';

const FoodCard = ({ recipe, navigation }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FoodDetail', { recipe })}
      activeOpacity={0.8}
      style={[styles.card, { backgroundColor: colors.cardItem }]}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: recipe?.image }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={[styles.title, { color: colors.text }]}>{recipe?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>lorem ipsum dolor sit amet</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <FontAwesome name="star" size={14} color="yellow" />
            <Text style={[styles.infoText, { color: colors.text }]}>{recipe?.rating}</Text>
          </View>
          <View style={styles.infoRow}>
            <TimerIcon color="#c0c0c0" width={14} height={14} />
            <Text style={[styles.infoText, { color: colors.text }]}>{recipe?.prepTimeMinutes} minutes</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome5 name="gripfire" size={14} color="#c0c0c0" />
            <Text style={[styles.infoText, { color: colors.text }]}>{recipe?.cuisine}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  imageContainer: {
    height: 144,
    width: '35%',
    overflow: 'hidden',
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts['600SemiBold'],
  },
  description: {
    fontFamily: Fonts['400Regular'],
    color: '#6b7280',
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 8,
    marginTop: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontFamily: Fonts['400Regular'],
  },
});

export default FoodCard;

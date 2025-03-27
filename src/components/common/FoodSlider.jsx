import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import FoodCard from './FoodCard'
import Fonts from '@/constants/Fonts';
import SlideCard from './SlideCard';
import { Colors } from '@/constants/Colors';

const FoodSlider = ({ title, foods, isFetching, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.listHeadingContainer}>
        <Text style={styles.listHeading}>{title}</Text>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        data={foods}
        renderItem={({ item }) => <SlideCard navigation={navigation} data={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          isFetching ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={Colors['main-green']} />
            </View>
          ) : (
            <Text style={styles.emptyText}>No recipes found.</Text>
          )
        }
      />
    </View>
  )
}

export default FoodSlider

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    gap: 12,
  },
  listHeading: {
    color: "white",
    fontSize: 18,
    fontFamily: Fonts['500Medium']
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
})

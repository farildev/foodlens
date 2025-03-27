import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fonts from '@/constants/Fonts'
const SlideCard = ({ data, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("FoodDetail", { data })} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} height={100} />
      </View>
      <Text style={styles.cardName}>{data?.name}</Text>
      <View style={styles.descContainer}>
        <Text style={styles.timeText}>{data?.prepTimeMinutes} min -</Text>
        <Text style={styles.cuisineText}>{data?.cuisine}</Text>
      </View>
    </Pressable>
  )
}

export default SlideCard

const styles = StyleSheet.create({
  cardContainer: {
    width: 200
  },
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden"
  },
  cardName: {
    color: "white",
    fontSize: 16,
    fontFamily: Fonts['600SemiBold'],
    marginTop: 4
  },
  descContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4
  },
  timeText: {
    color: "white",
    fontFamily: Fonts['400Regular'],
    fontSize: 14
  },
  cuisineText: {
    color: "white",
    fontFamily: Fonts['400Regular'],
    fontSize: 14
  }
})

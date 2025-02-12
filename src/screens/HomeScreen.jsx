import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import { Colors } from '@/constants/Colors';
import Fonts from '@/constants/Fonts';
const HomeScreen = () => {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <FlatList
      data={daysOfWeek}
      horizontal
      style={{height : "100px",flex: '0', paddingHorizontal : 12}}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
        activeOpacity={0.8}
          style={{
            backgroundColor: selectedDay === item ? Colors['main-green'] : "#C4F3DB",
            marginHorizontal: 8,
            borderRadius: '50%',
            justifyContent : 'center',
            alignItems : 'center',
            width : 54,
            height : 54
          }}
          onPress={() => setSelectedDay(item)}
        >
          <Text style={{ color: selectedDay ? "white" : "#000", fontSize : 16, fontFamily : Fonts['500Medium'] }}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
    />
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
const FavoriteMealsScreen = () => {
  const { setOptions } = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <View>
          <Feather name="arrow-left" color={'white'} size={20} />
        </View>
      )
    })
  }, [])
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default FavoriteMealsScreen

const styles = StyleSheet.create({})

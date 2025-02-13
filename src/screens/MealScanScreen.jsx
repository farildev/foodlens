import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const MealScanScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Button onPress={() => navigate("camera")} title='Camera' />
    </View>
  )
}

export default MealScanScreen

const styles = StyleSheet.create({})
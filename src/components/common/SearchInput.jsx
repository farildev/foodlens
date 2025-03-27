import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchIcon from '@/assets/icons/SearchIcon'

const SearchInput = ({ onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <SearchIcon color={"#474747"} width={20} height={20} />
      <TextInput onChangeText={onChange} placeholderTextColor={"#474747"} style={styles.input} placeholder='Search food' />
    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2e2e2e",
    gap: 8
  },
  input: {
    color: 'white'
  }
})

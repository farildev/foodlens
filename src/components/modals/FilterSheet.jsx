import React, { forwardRef, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { sortByType } from '@/store/slices/filterSlice';
import { Colors } from '@/constants/Colors';
import Fonts from '@/constants/Fonts';

const SORT_OPTIONS = [
  { key: 'name', label: 'Name' },
  { key: 'rating', label: 'Rating' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'cookTimeMinutes', label: 'Cooking time' },
  { key: 'prepTimeMinutes', label: 'Preparation time' },
];

const FilterSheet = forwardRef((_, ref) => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.filter.sortBy);
  const { colors } = useTheme();

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const handleSortChange = (sortType) => {
    dispatch(sortByType(sortType));
  };

  const renderSortOption = (item) => (
    <TouchableOpacity
      key={item.key}
      onPress={() => handleSortChange(item.key)}
      activeOpacity={0.8}
      style={styles.selectElement}
    >
      <View style={styles.sheetElementContainer}>
        <Text style={[styles.sheetElementText, { color: colors.text }]}>
          {item.label}
        </Text>
      </View>
      {sortBy === item.key && (
        <Feather
          name="check"
          size={18}
          color={Colors.mainColor}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={['50%']}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
      enablePanDownToClose={true}
      handleIndicatorStyle={{
        backgroundColor: colors.text,
        width: 40,
        height: 4,
      }}
      handleStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    >
      <View style={[styles.sheetContainer, { backgroundColor: colors.background }]}>
        {SORT_OPTIONS.map(renderSortOption)}
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  sheetContainer: {
    padding: 16,
    flexDirection: 'column',
    gap: 12,
    flex: 1,
  },
  selectElement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  sheetElementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sheetElementText: {
    fontFamily: Fonts['500Medium'],
    fontSize: 16,
  },
});

export default FilterSheet;

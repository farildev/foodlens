import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { forwardRef, useMemo, useRef, useCallback } from 'react';
import { Feather } from '@expo/vector-icons'
import Fonts from '@/constants/Fonts';
import { Colors } from '@/constants/Colors';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { sortAsc, sortDesc } from '@/store/slices/filterSlice';
const OrderSheet = forwardRef(({ }, ref) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.filter.order);
  const { colors } = useTheme()
  const snapPoints = ['50%']

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

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={ref}
      index={-1}
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

        <TouchableOpacity onPress={() => dispatch(sortAsc())} activeOpacity={0.8} style={styles.selectElement}>
          <View style={styles.sheetElementContainer}>
            <Feather name='arrow-up' size={24} color={colors.text} />
            <Text style={[styles.sheetElementText, { color: colors.text }]}>From DESC to ASC</Text>
          </View>
          {order === "asc" && <Feather name="check" size={18} color={Colors.mainColor} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(sortDesc())} activeOpacity={0.8} style={styles.selectElement}>
          <View style={styles.sheetElementContainer}>
            <Feather name='arrow-down' size={24} color={colors.text} />
            <Text style={[styles.sheetElementText, { color: colors.text }]}>From ASC to DESC</Text>
          </View>
          {order === "desc" && <Feather name="check" size={18} color={Colors.mainColor} />}
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
})

export default OrderSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    padding: 16,
    flexDirection: 'column',
    gap: 12,
    flex: 1
  },
  selectElement: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8
  },
  sheetElementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sheetElementText: {
    fontFamily: Fonts["500Medium"],
    fontSize: 16
  }
})

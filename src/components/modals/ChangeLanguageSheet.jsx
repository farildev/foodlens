import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { forwardRef, useMemo, useRef, useCallback } from 'react';
import { Feather } from '@expo/vector-icons'
import Fonts from '@/constants/Fonts';
import { Colors } from '@/constants/Colors';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useTheme } from '@react-navigation/native';
const ChangeLanguageSheet = forwardRef(({ }, ref) => {
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
        <TouchableOpacity activeOpacity={0.8} style={styles.selectElement}>
          <View style={styles.sheetElementContainer}>
            <Text style={{ fontSize: 20 }}>🇦🇿</Text>
            <Text style={[styles.sheetElementText, { color: colors.text }]}>Azerbaijani</Text>
          </View>
          <Feather name="check" size={18} color={Colors.mainColor} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.selectElement}>
          <View style={styles.sheetElementContainer}>
            <Text style={{ fontSize: 20 }}>🇦🇺</Text>
            <Text style={[styles.sheetElementText, { color: colors.text }]}>English</Text>
          </View>
          <Feather name="check" size={18} color={Colors.mainColor} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.selectElement}>
          <View style={styles.sheetElementContainer}>
            <Text style={{ fontSize: 20 }}>🇷🇺</Text>
            <Text style={[styles.sheetElementText, { color: colors.text }]}>Russian</Text>
          </View>
          <Feather name="check" size={18} color={Colors.mainColor} />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  )
})

export default ChangeLanguageSheet;

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
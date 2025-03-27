import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  TouchableOpacity,
  RefreshControl,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useGetAllFoodsQuery } from '@/store/services/foodService';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '@/store/api';

// Components
import FoodCard from '@/components/common/FoodCard';
import FilterIcon from '@/assets/icons/FilterIcon';
import ArrowsIcon from '@/assets/icons/ArrowsIcon';
import SearchInput from '@/components/common/SearchInput';
import OrderSheet from '@/components/modals/OrderSheet';
import FilterSheet from '@/components/modals/FilterSheet';

// Constants
import Fonts from '@/constants/Fonts';

const FoodScreen = () => {
  const dispatch = useDispatch();
  const { order, sortBy } = useSelector((state) => state.filter);
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const { colors } = useTheme();

  // Refs
  const orderSheetRef = useRef(null);
  const filterSheetRef = useRef(null);

  // State
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  // Memoized refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(api.util.invalidateTags(['FOODS']));
    setTimeout(() => setRefreshing(false), 2000);
  }, [dispatch]);

  // Query
  const { data, isFetching } = useGetAllFoodsQuery({
    q: search,
    limit: 10,
    order,
    sortBy
  });

  // Handlers
  const handleOrderSheet = useCallback(() => {
    orderSheetRef.current?.expand();
  }, []);

  const handleFilterSheet = useCallback(() => {
    filterSheetRef.current?.expand();
  }, []);

  const handleSearchRecipe = useCallback((value) => {
    setSearch(value);
  }, []);

  // Side effect to close order sheet when order changes
  useEffect(() => {
    return () => orderSheetRef.current?.close();
  }, [order]);

  useEffect(() => {
    return () => filterSheetRef.current?.close();
  }, [sortBy]);

  // Render methods
  const renderEmptyList = () => (
    !isFetching ? (
      <Text style={[styles.emptyText, { color: colors.text }]}>
        No recipes found.
      </Text>
    ) : (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    )
  );

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.container}>
        <SearchInput onChange={handleSearchRecipe} />

        <View style={styles.rowBetween}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.row}
            onPress={handleOrderSheet}
          >
            <ArrowsIcon width={20} height={20} color={'#fff'} />
            <Text style={styles.text}>Order</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.row}
            onPress={handleFilterSheet}
          >
            <FilterIcon width={20} height={20} color={'#fff'} />
            <Text style={styles.text}>Filters</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        data={data?.recipes}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colorScheme === "dark" ? '#000' : '#fff'}
            colors={[colorScheme === "dark" ? '#000000' : '#fff']}
          />
        }
        renderItem={({ item }) => (
          <FoodCard
            recipe={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={renderEmptyList}
      />

      <OrderSheet ref={orderSheetRef} />
      <FilterSheet ref={filterSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 16,
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: 'column',
    gap: 12,
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 12,
  },
  text: {
    color: '#fff',
    fontFamily: Fonts['500Medium'],
    fontSize: 16,
  },
  listContainer: {
    gap: 10,
    paddingBottom: 30,
  },
  emptyText: {
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default FoodScreen;

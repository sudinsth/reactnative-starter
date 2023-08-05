import React from 'react';
import {ViewProps, FlatList as RNFlatList, FlatListProps} from 'react-native';

import {colors} from '@theme';

interface Props<ItemT> extends ViewProps {
  data: ItemT[];
  flex?: number;
  bgColor?: string;
  scrollEventThrottle?: number;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  renderItem: FlatListProps<ItemT>['renderItem'];
  keyExtractor: FlatListProps<ItemT>['keyExtractor'];
}

const FlatList = <ItemT extends any>({
  data,
  renderItem,
  keyExtractor,
  bgColor = colors.white,
  scrollEventThrottle = 32,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  ...props
}: Props<ItemT>) => {
  return (
    <RNFlatList
      data={data}
      renderItem={renderItem}
      initialNumToRender={8}
      maxToRenderPerBatch={8}
      windowSize={11} // NOTE: experimental windowSize, might need to default later if any issue with content render
      keyExtractor={keyExtractor}
      style={{backgroundColor: bgColor}}
      scrollEventThrottle={scrollEventThrottle}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      {...props}
    />
  );
};

export default FlatList;

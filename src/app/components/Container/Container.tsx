import React, {FC} from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';

import {colors} from '@theme';
import {calculateHeight, calculateWidth} from '@utils';

interface Props extends ViewProps {
  flex?: number;
  row?: boolean;
  bgColor?: string;
  align?: 'center' | 'flex-start' | 'flex-end';
  hPadding?: number;
  vPadding?: number;
  vMargin?: number;
  hMargin?: number;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly';
  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;
}

const Container: FC<Props> = ({
  align,
  style,
  bgColor = colors.white,
  children,
  flex = 0,
  alignItems,
  row = false,
  vMargin = 0,
  hMargin = 0,
  borderWidth,
  borderColor,
  hPadding = 0,
  vPadding = 0,
  borderRadius,
  justifyContent,
  ...props
}) => {
  const containerStyle = [
    styles.defaultContainerStyle,
    {
      flex,
      borderColor,
      borderWidth,
      borderRadius,
      justifyContent,
      alignSelf: align,
      alignItems: alignItems,
      backgroundColor: bgColor,
      flexDirection: row ? 'row' : 'column',
      marginVertical: calculateHeight(vMargin),
      marginHorizontal: calculateWidth(hMargin),
      paddingVertical: calculateHeight(vPadding),
      paddingHorizontal: calculateWidth(hPadding),
    },
    style,
  ];

  return (
    <View style={containerStyle} {...props}>
      {children}
    </View>
  );
};

// Add default styles for the container if needed
const styles = StyleSheet.create({
  defaultContainerStyle: {},
});

export default React.memo(Container);

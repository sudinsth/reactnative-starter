import React, {FC} from 'react';
import {
  ViewStyle,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {colors, fontSize} from '@theme';
import {Text, Container} from '@app/components';
import {calculateHeight, calculateWidth} from '@utils';

interface Props {
  label: string;
  clear?: boolean;
  style?: ViewStyle;
  loading?: boolean;
  vPadding?: number;
  hPadding?: number;
  disabled?: boolean;
  labelSize?: number;
  labelColor?: string;
  onPress?: () => void;
  leftIcon?: React.ReactNode;
}

const Button: FC<Props> = ({
  clear,
  label,
  style,
  onPress,
  loading,
  vPadding = 10,
  hPadding = 24,
  disabled = false,
  labelSize,
  labelColor,
  leftIcon,
}) => {
  const verticalPadding = calculateHeight(vPadding);
  const horizontalPadding = calculateWidth(hPadding);

  const containerStyle = {
    paddingVertical: verticalPadding,
    paddingHorizontal: horizontalPadding,
    backgroundColor: clear ? 'transparent' : colors.blue,
    ...style,
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, containerStyle]}
    >
      {leftIcon}
      <Text color={labelColor ?? colors.white} size={labelSize ?? fontSize.f16}>
        {label}
      </Text>

      {loading && (
        <>
          <Container hPadding={4} />
          <ActivityIndicator
            size="small"
            animating={loading}
            color={colors.white}
          />
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});

export default Button;

import React, {FC} from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

import {colors, fontFamily, fontSize} from '@theme';

interface Props extends TextProps {
  size?: number;
  color?: string;
  opacity?: number;
  family?: keyof typeof fontFamilyTypography;
  lineHeight?: number;
  align?: 'auto' | 'left' | 'right' | 'justify' | 'center';
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

const Text: FC<Props> = props => {
  const {
    align,
    style,
    family,
    children,
    transform,
    lineHeight,
    opacity = 1,
    size = fontSize.f16,
    color = colors.black,
  } = props;

  return (
    <RNText
      {...props}
      style={[
        {
          color,
          opacity,
          lineHeight,
          fontSize: size,
          textAlign: align,
          textTransform: transform || 'none',
          fontFamily: family ? fontFamilyTypography[family] : undefined,
        },
        style,
      ]}
    >
      {children}
    </RNText>
  );
};

export default React.memo(Text);

enum FamilyType {
  interBold = 'interBold',
}

type fontFamilyType = {
  [key in keyof typeof FamilyType]: string;
};

const fontFamilyTypography: fontFamilyType = {
  interBold: fontFamily.inter.bold,
};

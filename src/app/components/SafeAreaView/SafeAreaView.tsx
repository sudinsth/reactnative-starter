import React, {FC} from 'react';
import {
  ViewProps,
  StatusBar,
  StatusBarProps,
  SafeAreaView as RNSafeAreaView,
} from 'react-native';

interface Props extends ViewProps {
  flex?: number;
  bgColor?: string;
  statusBarProps?: StatusBarProps;
}

const SafeAreaView: FC<Props> = ({
  flex = 0,
  statusBarProps,
  bgColor = 'transparent',
  ...props
}) => {
  const {barStyle, ...otherStatusBarProps} = statusBarProps || {};

  return (
    <>
      <StatusBar
        {...otherStatusBarProps}
        barStyle={barStyle || 'light-content'}
      />
      <RNSafeAreaView style={{flex, backgroundColor: bgColor}}>
        {props.children}
      </RNSafeAreaView>
    </>
  );
};

export default SafeAreaView;

import React, {FC} from 'react';
import {
  Platform,
  ViewStyle,
  StyleSheet,
  TextInputProps,
  TextInput as RNTextInput,
} from 'react-native';

import {colors, fontSize} from '@theme';
import {Container, Text} from '@app/components';
import {calculateHeight, calculateWidth} from '@utils';

interface Props extends TextInputProps {
  label?: string;
  errorMsg?: any;
  error?: boolean;
  touched?: boolean;
  required?: boolean;
  noBorder?: boolean;
  showPassword?: boolean;
  customErrorMsg?: string;
  rightIcon?: JSX.Element;
  noErrorMessage?: boolean;
  textFieldStyle?: ViewStyle;
  eyeIconOnPress?: () => void;
  inputContainerStyle?: ViewStyle;
}

const TextInput: FC<Props> = ({
  label,
  touched,
  errorMsg,
  textFieldStyle,
  inputContainerStyle,
  eyeIconOnPress,
  rightIcon,
  noBorder = false,
  noErrorMessage = false,
  ...props
}) => {
  return (
    <Container flex={0} style={[styles.container, textFieldStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <Container
        flex={0}
        style={[
          styles.textInputView,
          {
            borderWidth: noBorder ? 0 : 1,
            borderColor: touched && errorMsg ? colors.red : colors.gray,
          },
          inputContainerStyle,
        ]}
      >
        <RNTextInput
          {...props}
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholderTextColor={colors.gray}
          style={[styles.textField, props.style]}
        />

        {/* NOTE: default EyeIcon on right side of the text input for passwords */}
        {/* {eyeIconOnPress && (
          <Pressable onPress={eyeIconOnPress}>
            {props?.secureTextEntry ? (
              <Icon source={icons.eyeDisableIcon} size={24} />
            ) : (
              <Icon source={icons.eyeIcon} style={styles.eyeIcon} />
            )}
          </Pressable>
        )} */}

        {rightIcon}
      </Container>

      {!noErrorMessage && (
        <Text size={fontSize.f10} style={styles.hintMsg} color={colors.red}>
          {touched && errorMsg}
        </Text>
      )}
    </Container>
  );
};

export default React.memo(TextInput);

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
  },
  textField: {
    ...Platform.select({
      ios: {
        paddingVertical: 14,
      },
    }),
    flex: 1,
    color: colors.black,
    fontSize: fontSize.f16,
  },
  textInputView: {
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
  eyeIcon: {
    marginLeft: 14,
    width: calculateWidth(24),
    height: calculateHeight(24),
  },
  label: {
    marginBottom: 8,
  },
  hintMsg: {
    marginTop: 2,
    marginBottom: 4,
  },
});

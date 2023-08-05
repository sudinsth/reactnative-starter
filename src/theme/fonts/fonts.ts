import {Dimensions} from 'react-native';

const {fontScale} = Dimensions.get('window');

const getFont = (value: number) => {
  return value / fontScale;
};

export const fontSize = {
  f8: getFont(8),
  f10: getFont(10),
  f12: getFont(12),
  f14: getFont(14),
  f16: getFont(16),
  f18: getFont(18),
  f20: getFont(20),
  f22: getFont(22),
  f24: getFont(24),
  f26: getFont(26),
  f28: getFont(28),
  f30: getFont(30),
  f32: getFont(32),
  f34: getFont(34),
  f48: getFont(48),
  f60: getFont(60),
};

export const fontFamily = {
  inter: {
    bold: 'Inter-Bold',
  },
};

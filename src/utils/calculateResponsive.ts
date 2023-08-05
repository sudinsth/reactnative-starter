import {Dimensions} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const FIGMA_FRAME_HEIGHT = 812;
const FIGMA_FRAME_WIDTH = 375;

export const calculateHeight = (height: number) => {
  return deviceHeight * (height / FIGMA_FRAME_HEIGHT);
};

export const calculateWidth = (width: number) => {
  return deviceWidth * (width / FIGMA_FRAME_WIDTH);
};

export {deviceHeight, deviceWidth};

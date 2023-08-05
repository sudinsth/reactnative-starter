import React, {FC} from 'react';
import {Image, ImageProps, ImageResizeMode} from 'react-native';

import {calculateHeight, calculateWidth} from '@utils';

interface Props extends ImageProps {
  size?: number;
  tintColor?: string;
  borderRadius?: number;
  resize?: ImageResizeMode;
}

const Icon: FC<Props> = ({
  source,
  size,
  style,
  resize,
  tintColor,
  borderRadius,
  ...props
}) => {
  const iconWidth = calculateWidth(size || 24);
  const iconHeight = calculateHeight(size || 24);
  return (
    <Image
      {...props}
      source={source}
      style={[
        {
          width: iconWidth,
          height: iconHeight,
          tintColor: tintColor,
          borderRadius: borderRadius,
        },
        style,
      ]}
      resizeMode={resize || 'contain'}
    />
  );
};

export default React.memo(Icon);

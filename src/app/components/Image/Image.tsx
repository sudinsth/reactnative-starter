import {colors} from '@app/ui';
import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import FastImage, {
  Source,
  ImageStyle,
  FastImageProps,
} from 'react-native-fast-image';

enum Priority {
  'high',
  'normal',
  'low',
}

interface Props extends FastImageProps {
  style: ImageStyle;
  size: number;
  resizeMode?: 'cover' | 'contain';
  source?: Source;
  uri?: string;
  width?: number;
  height?: number;
  priority?: Priority.high | Priority.normal | Priority.low;
}

/**
 * Image component for url based images
 * Use Icon component for local images
 * @param param0
 * @returns
 */
const Image: FC<Props> = ({...props}) => {
  const [imageLoading, setImageLoading] = React.useState(false);

  const getFastImagePriority = () =>
    props.priority === Priority.high
      ? FastImage.priority.high
      : props.priority === Priority.low
      ? FastImage.priority.low
      : FastImage.priority.normal;

  // Add default image loader
  return (
    <FastImage
      resizeMode={props.resizeMode}
      source={
        props.uri
          ? {
              uri: props.uri,
              priority: getFastImagePriority(),
            }
          : props.source
      }
      style={[
        {
          width: props.size ?? props.width,
          height: props.size ?? props.height,
        },
        props.style,
      ]}
    />
  );
};

export default React.memo(Image);

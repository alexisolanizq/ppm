import React from 'react';
import ProfileImage from '@Assets/images/profile.png';
import { isValid } from '@Utils/values';

const ImageAvatar = ({
  src,
  width = 50,
  height = 50,
  alt = 'Profile avatar',
  className = '',
  ...props
}) => (
    <img
      className={`imageAvatar ${className}`}
      src={isValid(src) ? src : ProfileImage}
      width={width}
      height={height}
      alt={alt}
      {...props}
    />
);

export default ImageAvatar;

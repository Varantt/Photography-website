import React from "react";
import CameraImage from '../../../../public/assets/camera.avif';

export const Camera: React.FC = () => {
  return (
    <React.Fragment>
      <img src={CameraImage} alt="camera image" height = {400}  />
    </React.Fragment>
  );
};

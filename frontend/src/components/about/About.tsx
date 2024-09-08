import React from "react";
import { Camera } from "../Layout/camera/Camera";

export const About: React.FC = ({}) => {
  return (
    <section id="about" className="min-h-svh w-full">
      <div className="about-container flex gap-default h-[400px] w-full ">
        <div className="camera flex w-1/2 justify-start">
          <Camera />
        </div>

        <div className="about-info w-1/2">
          <h2 className = "text-3xl font-medium">About me</h2>
          <p className = "mt-3"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident esse doloremque minus voluptatibus. Quaerat omnis sint hic, reprehenderit quod voluptatem natus alias dolore tempore quo cum nemo! Laudantium, quasi id.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, rerum, similique nihil facilis maiores dolore illo, mollitia vel qui dignissimos molestias rem officia a eaque dolorem non quis corrupti ipsa?</p>
        </div>
      </div>
    </section>
  );
};

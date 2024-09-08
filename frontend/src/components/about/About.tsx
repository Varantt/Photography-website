import React, { useRef, useEffect, useState } from "react";
import { Camera } from "../Layout/camera/Camera";
import "./about.css";
import useScroll from "@/hooks/useScroll";

export const About: React.FC = ({}) => {
  const cameraRef = useRef<HTMLDivElement>(null);
  const [showFlash, setShowFlash] = useState(false);
  useEffect(() => {
    const cameraElement = cameraRef.current;
    if (!cameraElement) return;

    const handleAnimationEnd = () => {
      setShowFlash(true);
      setTimeout(() => setShowFlash(false), 500); // Remove flash after animation
    };

    cameraElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      cameraElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  const { isVisible } = useScroll(cameraRef);
  return (
    <section id="about" className="min-h-svh w-full">
      <div className="about-container flex flex-col md:flex-row gap-default h-[30svh] md:h-[400px] w-full ">
        <div
          className={`camera flex w-full md:w-1/2 justify-start ${
            isVisible ? "camera-animate" : ""
          }`}
          ref={cameraRef}
        >
          <Camera />
          {showFlash && <div className="flash"></div>}
        </div>

        <div className={`about-info w-full md:w-1/2  relative ${showFlash ? 'flash' : ''}`}>
          <h2 className="text-3xl font-medium about-title">About me</h2>
          <p className={`mt-3 ${showFlash ? "" : ""}`}>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            esse doloremque minus voluptatibus. Quaerat omnis sint hic,
            reprehenderit quod voluptatem natus alias dolore tempore quo cum
            nemo! Laudantium, quasi id.Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quia, rerum, similique nihil facilis maiores
            dolore illo, mollitia vel qui dignissimos molestias rem officia a
            eaque dolorem non quis corrupti ipsa?
          </p>
        </div>
      </div>
    </section>
  );
};

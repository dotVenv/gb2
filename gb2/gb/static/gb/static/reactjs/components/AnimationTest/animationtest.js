import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";

const AnimationTest = () => {
  return (
    <div id="canvas-container" className="justify-center align-center mx-auto">
      <Canvas>
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshBasicMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default AnimationTest;
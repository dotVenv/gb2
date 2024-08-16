import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";

const AnimationTest = () => {
  return (
    <div id="canvas-container" className="justify-center align-center mx-auto">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Sphere
          args={[1, 16, 16]}
          position={[14, 12, 3]}
          rotation={[Math.PI / 2, 0, 0]}
        >
         
        </Sphere>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default AnimationTest;
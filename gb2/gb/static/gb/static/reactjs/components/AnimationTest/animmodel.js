import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


useGLTF.preload('staticfiles/gb/static/gltf/iso_room.gltf');

export default function Animmodel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('staticfiles/gb/static/gltf/iso_room.gltf');
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
      <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
    </group>
  )
};


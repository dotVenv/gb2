'use client'; 


import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint, } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })


function Band() {
    // References for the band and the joints
    const band = useRef()
    const fixed = useRef()
    const j1 = useRef()
    const j2 = useRef()
    const j3 = useRef()
    // Canvas size
    const { width, height } = useThree((state) => state.size)
    // A Catmull-Rom curve
    const [curve] = useState(() => new THREE.CatmullRomCurve3([
      new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
    ]))

}
useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])

const BigBadge = () => {

    return(
        <Canvas>
        <Physics>
          {/* ... */}
        </Physics>
      </Canvas>
    );


};

export default BigBadge;
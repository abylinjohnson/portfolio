//@ts-nocheck
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../retro_computer/Scene';
export default function RetroPC() {
   return (
      <Canvas
      camera={{ position: [20, 10, 15], fov: 10 }}
         style={{
            width: '40vw',
            height: '40vh',
         }}
      >    
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.5} />
         <directionalLight intensity={0.10} />
         <Suspense fallback={null}>
         <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}
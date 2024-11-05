// Model.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  // Wykorzystujemy useGLTF do załadowania modelu 3D
  const { scene } = useGLTF('/structure.glb'); // Podaj ścieżkę do pliku

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ width: '75vw', height: '75vh' }}>
      {/* Dodaj światło */}
      <ambientLight intensity={1} />
      <directionalLight position={[15, 15, 10]} intensity={1} />

      {/* Renderowanie modelu */}
      <Model />

      {/* OrbitControls umożliwia obracanie i przybliżanie modelu */}
      <OrbitControls enableZoom={true} 
         maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}

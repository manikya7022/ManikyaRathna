import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export const AbstractShape = ({ color = "#06b6d4" }: { color?: string }) => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <MeshComponent color={color} />
      </Float>
    </Canvas>
  );
};

const MeshComponent = ({ color }: { color: string }) => {
  const mesh = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={mesh} scale={2.5}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

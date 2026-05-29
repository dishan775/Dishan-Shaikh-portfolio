import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AvatarMesh = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe Core */}
      <Icosahedron args={[1.5, 1]}>
        <meshBasicMaterial color="#00D4FF" wireframe transparent opacity={0.6} />
      </Icosahedron>
      
      {/* Inner Glowing Core */}
      <Icosahedron args={[1.3, 2]}>
        <MeshDistortMaterial 
          color="#7C3AED" 
          emissive="#7C3AED"
          emissiveIntensity={0.5}
          distort={0.4} 
          speed={2} 
          transparent 
          opacity={0.8} 
        />
      </Icosahedron>

      {/* Orbiting Spheres (Electrons) */}
      <OrbitingSphere radius={2.5} speed={1} offset={0} size={0.1} color="#00D4FF" />
      <OrbitingSphere radius={2.2} speed={-1.5} offset={Math.PI / 2} size={0.08} color="#10B981" />
      <OrbitingSphere radius={2.8} speed={0.8} offset={Math.PI} size={0.12} color="#7C3AED" axis="z" />
    </group>
  );
};

const OrbitingSphere = ({ radius, speed, offset, size, color, axis = 'y' }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const angle = time * speed + offset;
    
    if (meshRef.current) {
      if (axis === 'y') {
        meshRef.current.position.x = Math.cos(angle) * radius;
        meshRef.current.position.z = Math.sin(angle) * radius;
      } else {
        meshRef.current.position.y = Math.cos(angle) * radius;
        meshRef.current.position.z = Math.sin(angle) * radius;
      }
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 16, 16]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </Sphere>
  );
};

const AvatarCanvas = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#0a0f1e']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
        <AvatarMesh />
      </Canvas>
    </div>
  );
};

export default AvatarCanvas;

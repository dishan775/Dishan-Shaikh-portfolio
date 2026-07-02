import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AvatarMesh = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe (Icosahedron from Spline reference) */}
      <Icosahedron args={[2.2, 2]}>
        <meshBasicMaterial color="#a3e635" wireframe transparent opacity={0.4} />
      </Icosahedron>
      
      {/* Inner Solid Core (Flat shading like the reference) */}
      <Icosahedron args={[2.0, 2]}>
        <meshStandardMaterial 
          color="#10B981" 
          emissive="#2ecc71"
          emissiveIntensity={0.2}
          flatShading={true}
          roughness={0.5}
        />
      </Icosahedron>

      {/* Orbiting Spheres (Electrons) - Radius increased to match new size */}
      <OrbitingSphere radius={3.2} speed={1} offset={0} size={0.12} color="#39FF14" />
      <OrbitingSphere radius={2.9} speed={-1.5} offset={Math.PI / 2} size={0.1} color="#a3e635" />
      <OrbitingSphere radius={3.5} speed={0.8} offset={Math.PI} size={0.15} color="#2ecc71" axis="z" />
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
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: 'transparent' }}
      >

        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#39FF14" />
        <AvatarMesh />
      </Canvas>
    </div>
  );
};

export default AvatarCanvas;

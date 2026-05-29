import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Sphere = () => {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates from -1 to 1
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [positions] = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 3 + Math.random() * 1.5; // Radius variation
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    // Base rotation
    ref.current.rotation.y += delta * 0.1;
    ref.current.rotation.x += delta * 0.05;
    
    // Smooth mouse follow
    target.current.x += (mouse.current.x * 0.5 - target.current.x) * 0.05;
    target.current.y += (mouse.current.y * 0.5 - target.current.y) * 0.05;

    ref.current.rotation.y += target.current.x * 0.05;
    ref.current.rotation.x += -target.current.y * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent 
        color="#10B981" 
        size={0.04} 
        sizeAttenuation={true} 
        depthWrite={false} 
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
};

const ParticleSphere = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 flex items-center justify-center">
      <div className="w-[150vw] h-[150vh] max-w-[2000px] max-h-[2000px]">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <Sphere />
        </Canvas>
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#10B981] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-screen" />
    </div>
  );
};

export default ParticleSphere;

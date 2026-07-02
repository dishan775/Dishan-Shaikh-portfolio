import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const NetworkMesh = () => {
  const groupRef = useRef();
  const { mouse, viewport } = useThree();
  
  const nodeCount = 100;
  const nodes = useMemo(() => {
    const positions = new Float32Array(nodeCount * 3);
    const colors = new Float32Array(nodeCount * 3);
    const colorPrimary = new THREE.Color('#39FF14');
    const colorSecondary = new THREE.Color('#10B981');
    
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      
      const mixedColor = colorPrimary.clone().lerp(colorSecondary, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return { positions, colors };
  }, []);

  const lines = useMemo(() => {
    const linePositions = [];
    const threshold = 3.5;
    
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const x1 = nodes.positions[i * 3];
        const y1 = nodes.positions[i * 3 + 1];
        const z1 = nodes.positions[i * 3 + 2];
        const x2 = nodes.positions[j * 3];
        const y2 = nodes.positions[j * 3 + 1];
        const z2 = nodes.positions[j * 3 + 2];
        
        const dist = Math.sqrt(
          Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)
        );
        
        if (dist < threshold) {
          linePositions.push([new THREE.Vector3(x1, y1, z1), new THREE.Vector3(x2, y2, z2)]);
        }
      }
    }
    return linePositions;
  }, [nodes]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0006;
    groupRef.current.rotation.x += 0.0002;
    
    const targetX = (mouse.x * viewport.width) / 30;
    const targetY = (mouse.y * viewport.height) / 30;
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.01;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.01;
  });

  return (
    <group ref={groupRef}>
      <Points positions={nodes.positions} colors={nodes.colors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {lines.map((points, index) => (
        <Line 
          key={index}
          points={points}
          color="#39FF14"
          opacity={0.1}
          transparent
          lineWidth={0.8}
        />
      ))}
    </group>
  );
};

const AmbientDust = () => {
  const pointsRef = useRef();
  
  const particleCount = 200;
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= 0.0003;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial
        transparent
        color="#10B981"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

const NeuralCanvas = () => {
  const { theme } = useTheme();

  return (
    <div 
      className="absolute inset-0 w-full h-full z-0"
      style={{ opacity: theme === 'light' ? 0.3 : 1 }}
    >
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <NetworkMesh />
        <AmbientDust />
      </Canvas>
    </div>
  );
};

export default NeuralCanvas;

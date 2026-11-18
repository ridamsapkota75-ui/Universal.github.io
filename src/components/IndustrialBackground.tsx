import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles({ count = 70 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.08;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#1265D8"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

function MetallicBeams() {
  return (
    <group position={[0, 0, -4]}>
      {/* Subtle structural industrial wireframe lines */}
      {[-5, -1.5, 2, 5.5].map((x, i) => (
        <mesh key={`h-${i}`} position={[x, (i % 2 === 0 ? 1 : -1) * 2, -3]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.012, 0.012, 10, 8]} />
          <meshStandardMaterial color="#0B2344" metalness={0.9} roughness={0.3} transparent opacity={0.35} />
        </mesh>
      ))}
      {[-3.5, 0, 3.5].map((x, i) => (
        <mesh key={`v-${i}`} position={[x, 0, -4]}>
          <cylinderGeometry args={[0.015, 0.015, 14, 8]} />
          <meshStandardMaterial color="#0B2344" metalness={0.9} roughness={0.3} transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

export default function IndustrialBackground() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined' && window.matchMedia) {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  if (!mounted || reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30 select-none overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 48 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[6, 6, 4]} intensity={0.6} color="#1265D8" />
        <pointLight position={[-6, -4, 2]} intensity={0.35} color="#1D4ED8" />
        <FloatingParticles count={65} />
        <MetallicBeams />
      </Canvas>
    </div>
  );
}

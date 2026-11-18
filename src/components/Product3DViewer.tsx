import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, useGLTF } from '@react-three/drei';
import DetailedFurniture3D from './DetailedFurniture3D';

interface Props {
  slug?: string;
  category?: string;
  modelSrc?: string;
  autoRotate?: boolean;
  className?: string;
}

// GLB Loader with safe fallback
function DynamicGLBModel({ src, fallback }: { src: string; fallback: React.ReactNode }) {
  try {
    const gltf = useGLTF(src);
    return <primitive object={gltf.scene} />;
  } catch (e) {
    return <>{fallback}</>;
  }
}

export default function Product3DViewer({
  slug,
  category,
  modelSrc,
  autoRotate = false,
  className = 'w-full h-96',
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(autoRotate);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`${className} bg-darkBlue/40 rounded-xl flex items-center justify-center border border-electricBlue/20`}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-8 border-2 border-electricBlue border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-metallicSilver font-mono uppercase tracking-wider">Loading 3D Studio...</span>
        </div>
      </div>
    );
  }

  const fallbackScene = <DetailedFurniture3D slug={slug} category={category} autoRotate={isRotating} />;

  return (
    <div className={`relative ${className} bg-gradient-to-b from-darkBlue/60 to-deepNavy/90 rounded-2xl overflow-hidden border border-electricBlue/30 shadow-2xl group`}>
      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 1.2, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.6} />
        {/* Key Light */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        {/* Soft Fill Light */}
        <directionalLight position={[-5, 3, -2]} intensity={0.5} color="#DCEBFA" />
        {/* Electric Blue Rim / Accent Light */}
        <pointLight position={[0, -2, -3]} intensity={1.8} color="#1265D8" />
        <pointLight position={[3, 4, -2]} intensity={0.8} color="#1D4ED8" />

        <Suspense fallback={null}>
          {modelSrc ? (
            <DynamicGLBModel src={modelSrc} fallback={fallbackScene} />
          ) : (
            fallbackScene
          )}
          <ContactShadows position={[0, -0.85, 0]} opacity={0.6} scale={6} blur={2} far={4} color="#050C16" />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minDistance={1.8}
          maxDistance={6.0}
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI / 2 + 0.05}
          autoRotate={isRotating}
          autoRotateSpeed={1.5}
        />
      </Canvas>

      {/* Floating Interactive Controls & HUD */}
      <div className="absolute top-3 left-4 flex items-center space-x-2 pointer-events-none">
        <span className="inline-block w-2 h-2 rounded-full bg-electricBlue animate-pulse" />
        <span className="text-[11px] font-mono uppercase tracking-wider text-metallicSilver/90 bg-deepNavy/80 px-2 py-0.5 rounded border border-electricBlue/20">
          Interactive 3D Viewport
        </span>
      </div>

      <div className="absolute bottom-3 right-4 flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className="text-[11px] font-mono uppercase tracking-wider bg-deepNavy/90 hover:bg-electricBlue text-iceBlue hover:text-white px-3 py-1.5 rounded-lg border border-electricBlue/30 transition shadow-md"
        >
          {isRotating ? 'Pause Rotation' : 'Auto Rotate'}
        </button>
      </div>

      <div className="absolute bottom-3 left-4 pointer-events-none text-[11px] font-mono text-metallicSilver/70 hidden sm:block">
        Drag to rotate in 3D • Precision geometry
      </div>
    </div>
  );
}

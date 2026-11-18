import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import Image from 'next/image';
import Link from 'next/link';
import * as THREE from 'three';
import { GondolaRack3D } from './DetailedFurniture3D';

function InteractiveScene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Smooth subtle parallax rotation responding to cursor
      const targetRotY = mouseX * 0.4 + 0.15;
      const targetRotX = -mouseY * 0.15;
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 3, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 3, delta);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <GondolaRack3D />
    </group>
  );
}

export default function Hero3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-deepNavy via-darkBlue to-deepNavy">
      {/* Cinematic Factory Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Universal.github.io/images/backgrounds/hero-factory.jpg"
          alt="UFI Manufacturing Facility"
          fill
          className="object-cover"
          quality={75}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/70 via-deepNavy/80 to-deepNavy/95" />
      </div>

      {/* Background Architectural Blueprint / Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b234418_1px,transparent_1px),linear-gradient(to_bottom,#0b234418_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electricBlue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] bg-royalBlue/20 rounded-full blur-[100px] pointer-events-none" />

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas
            shadows
            camera={{ position: [0, 0.8, 4.2], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.7} />
            <directionalLight position={[6, 9, 6]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
            <directionalLight position={[-6, 4, -3]} intensity={0.6} color="#DCEBFA" />
            <pointLight position={[0, -2, -4]} intensity={2.2} color="#1265D8" />
            <pointLight position={[3, 4, -2]} intensity={1.2} color="#1D4ED8" />

            <Suspense fallback={null}>
              <InteractiveScene mouseX={mousePos.x} mouseY={mousePos.y} />
              <ContactShadows position={[0, -0.85, 0]} opacity={0.7} scale={6} blur={2.2} far={4} color="#030812" />
              <Environment preset="city" />
            </Suspense>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2 + 0.05}
            />
          </Canvas>
        )}
      </div>

      {/* Hero Content Overlay (Glass-morphism text container) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center pointer-events-none">
        {/* Brand Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-darkBlue/80 border border-electricBlue/40 backdrop-blur-md mb-6 pointer-events-auto shadow-lg">
          <span className="w-2 h-2 rounded-full bg-electricBlue animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-iceBlue font-medium">
            UNIVERSAL FURNITURE INDUSTRIES | EST. 1990
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-steelWhite tracking-tight max-w-5xl leading-[1.08] drop-shadow-md">
          ENGINEERED FOR<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-iceBlue via-electricBlue to-metallicSilver">
            EVERY SPACE.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-metallicSilver/90 max-w-2xl leading-relaxed">
          Precision-manufactured metal furniture for businesses, institutions, and modern living. Trusted since 1990 in Chitwan, Nepal.
        </p>

        {/* CTA Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
          <Link
            href="/#collections"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-electricBlue hover:bg-royalBlue text-white font-semibold text-sm tracking-wide shadow-lg shadow-electricBlue/25 hover:shadow-electricBlue/40 transition duration-300 transform hover:-translate-y-0.5"
          >
            EXPLORE OUR PRODUCTS
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-deepNavy/80 hover:bg-darkBlue text-iceBlue border border-electricBlue/40 font-medium text-sm tracking-wide backdrop-blur-sm transition duration-300"
          >
            REQUEST A QUOTE
          </Link>
        </div>

        {/* Small 3D Interaction Hint */}
        <div className="mt-12 text-xs font-mono text-metallicSilver/60 flex items-center space-x-2">
          <span>PRECISION 3D MODEL: DOUBLE-SIDED GONDOLA RACK</span>
          <span>•</span>
          <span>MOVE CURSOR TO ROTATE</span>
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Premium industrial PBR materials
const ufiBlue = new THREE.MeshStandardMaterial({
  color: '#1265D8',
  metalness: 0.8,
  roughness: 0.25,
});

const darkSteel = new THREE.MeshStandardMaterial({
  color: '#151D28',
  metalness: 0.85,
  roughness: 0.3,
});

const shelfWhite = new THREE.MeshStandardMaterial({
  color: '#E8EFF8',
  metalness: 0.5,
  roughness: 0.2,
});

const woodOak = new THREE.MeshStandardMaterial({
  color: '#BC8244',
  roughness: 0.55,
  metalness: 0.05,
});

const woodDark = new THREE.MeshStandardMaterial({
  color: '#4A2E1B',
  roughness: 0.45,
  metalness: 0.05,
});

const chromeMetal = new THREE.MeshStandardMaterial({
  color: '#DCE6F2',
  metalness: 0.95,
  roughness: 0.1,
});

const hospitalBlue = new THREE.MeshStandardMaterial({
  color: '#1D63B8',
  roughness: 0.6,
  metalness: 0.1,
});

const clinicalWhite = new THREE.MeshStandardMaterial({
  color: '#F4F7FC',
  roughness: 0.3,
  metalness: 0.3,
});

const sofaFabric = new THREE.MeshStandardMaterial({
  color: '#1B2C46',
  roughness: 0.85,
  metalness: 0.05,
});

// 1. Detailed Double-Sided Supermarket Gondola Rack
export function GondolaRack3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  const shelfTiers = [0.1, 0.45, 0.8, 1.15, 1.5];

  return (
    <group ref={groupRef} position={[0, -0.85, 0]}>
      {/* Upright Posts (Two vertical slotted steel beams) */}
      <mesh position={[-0.8, 0.9, 0]} material={ufiBlue} castShadow>
        <boxGeometry args={[0.07, 1.85, 0.07]} />
      </mesh>
      <mesh position={[0.8, 0.9, 0]} material={ufiBlue} castShadow>
        <boxGeometry args={[0.07, 1.85, 0.07]} />
      </mesh>

      {/* Top Header Tie-Bar */}
      <mesh position={[0, 1.8, 0]} material={ufiBlue} castShadow>
        <boxGeometry args={[1.68, 0.05, 0.07]} />
      </mesh>

      {/* Center Solid Back Metal Panel */}
      <mesh position={[0, 0.9, 0]} material={shelfWhite} receiveShadow>
        <boxGeometry args={[1.55, 1.7, 0.02]} />
      </mesh>

      {/* Heavy-duty Base Feet (Front & Back) */}
      {/* Left Base Foot */}
      <mesh position={[-0.8, 0.04, 0]} material={ufiBlue} castShadow>
        <boxGeometry args={[0.07, 0.08, 0.8]} />
      </mesh>
      {/* Right Base Foot */}
      <mesh position={[0.8, 0.04, 0]} material={ufiBlue} castShadow>
        <boxGeometry args={[0.07, 0.08, 0.8]} />
      </mesh>

      {/* Base Shelves (Wider bottom tiers) */}
      {/* Front Base Shelf */}
      <mesh position={[0, 0.08, 0.22]} material={shelfWhite} castShadow receiveShadow>
        <boxGeometry args={[1.66, 0.03, 0.4]} />
      </mesh>
      <mesh position={[0, 0.08, 0.42]} material={ufiBlue} castShadow>
        <boxGeometry args={[1.66, 0.04, 0.015]} />
      </mesh>
      {/* Rear Base Shelf */}
      <mesh position={[0, 0.08, -0.22]} material={shelfWhite} castShadow receiveShadow>
        <boxGeometry args={[1.66, 0.03, 0.4]} />
      </mesh>
      <mesh position={[0, 0.08, -0.42]} material={ufiBlue} castShadow>
        <boxGeometry args={[1.66, 0.04, 0.015]} />
      </mesh>

      {/* Upper Shelves (Both Front and Back tiers with realistic brackets and price lips) */}
      {shelfTiers.map((y, idx) => (
        <group key={idx}>
          {/* Front Shelf */}
          <mesh position={[0, y, 0.18]} material={shelfWhite} castShadow receiveShadow>
            <boxGeometry args={[1.6, 0.025, 0.32]} />
          </mesh>
          {/* Front Price Rail */}
          <mesh position={[0, y, 0.34]} material={ufiBlue} castShadow>
            <boxGeometry args={[1.6, 0.035, 0.012]} />
          </mesh>
          {/* Front Shelf Brackets */}
          <mesh position={[-0.78, y - 0.04, 0.1]} material={ufiBlue}>
            <boxGeometry args={[0.02, 0.06, 0.18]} />
          </mesh>
          <mesh position={[0.78, y - 0.04, 0.1]} material={ufiBlue}>
            <boxGeometry args={[0.02, 0.06, 0.18]} />
          </mesh>

          {/* Rear Shelf */}
          <mesh position={[0, y, -0.18]} material={shelfWhite} castShadow receiveShadow>
            <boxGeometry args={[1.6, 0.025, 0.32]} />
          </mesh>
          {/* Rear Price Rail */}
          <mesh position={[0, y, -0.34]} material={ufiBlue} castShadow>
            <boxGeometry args={[1.6, 0.035, 0.012]} />
          </mesh>
          {/* Rear Shelf Brackets */}
          <mesh position={[-0.78, y - 0.04, -0.1]} material={ufiBlue}>
            <boxGeometry args={[0.02, 0.06, 0.18]} />
          </mesh>
          <mesh position={[0.78, y - 0.04, -0.1]} material={ufiBlue}>
            <boxGeometry args={[0.02, 0.06, 0.18]} />
          </mesh>
        </group>
      ))}

      {/* Leveling Glides */}
      {[-0.8, 0.8].map((x) =>
        [-0.38, 0.38].map((z, i) => (
          <mesh key={`${x}-${i}`} position={[x, -0.01, z]} material={darkSteel}>
            <cylinderGeometry args={[0.025, 0.025, 0.02, 16]} />
          </mesh>
        ))
      )}
    </group>
  );
}

// 2. School Classroom Bench & Desk
export function SchoolBench3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Desk Top (Warm natural oak) */}
      <mesh position={[0, 0.6, 0.15]} material={woodOak} castShadow>
        <boxGeometry args={[1.5, 0.035, 0.55]} />
      </mesh>
      {/* Desk Book Shelf / Tray */}
      <mesh position={[0, 0.48, 0.15]} material={ufiBlue} castShadow>
        <boxGeometry args={[1.4, 0.02, 0.45]} />
      </mesh>

      {/* Desk Legs (Welded blue steel tube frame) */}
      {[-0.68, 0.68].map((x) => (
        <group key={x}>
          <mesh position={[x, 0.3, 0.35]} material={ufiBlue} castShadow>
            <boxGeometry args={[0.04, 0.6, 0.04]} />
          </mesh>
          <mesh position={[x, 0.3, -0.05]} material={ufiBlue} castShadow>
            <boxGeometry args={[x > 0 ? 0.04 : 0.04, 0.6, 0.04]} />
          </mesh>
          <mesh position={[x, 0.02, 0.15]} material={ufiBlue}>
            <boxGeometry args={[0.04, 0.04, 0.45]} />
          </mesh>
        </group>
      ))}

      {/* Crossbar footrest */}
      <mesh position={[0, 0.12, 0.15]} material={ufiBlue}>
        <boxGeometry args={[1.4, 0.03, 0.03]} />
      </mesh>

      {/* Attached Classroom Bench (Student Seat) */}
      <mesh position={[0, 0.35, -0.35]} material={woodOak} castShadow>
        <boxGeometry args={[1.5, 0.03, 0.3]} />
      </mesh>
      {/* Bench Backrest */}
      <mesh position={[0, 0.62, -0.48]} material={woodOak} castShadow>
        <boxGeometry args={[1.5, 0.18, 0.025]} />
      </mesh>

      {/* Bench Support Posts */}
      {[-0.65, 0.65].map((x) => (
        <group key={`bench-${x}`}>
          <mesh position={[x, 0.17, -0.35]} material={ufiBlue} castShadow>
            <boxGeometry args={[0.04, 0.34, 0.04]} />
          </mesh>
          <mesh position={[x, 0.48, -0.48]} material={ufiBlue} castShadow>
            <boxGeometry args={[0.03, 0.3, 0.03]} />
          </mesh>
          {/* Floor connecting frame */}
          <mesh position={[x, 0.02, -0.1]} material={ufiBlue}>
            <boxGeometry args={[0.04, 0.04, 0.5]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// 3. Clinical Hospital Adjustable Bed
export function HospitalBed3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.45, 0]}>
      {/* Base Frame (Steel with locking caster wheels) */}
      <mesh position={[0, 0.18, 0]} material={clinicalWhite} castShadow>
        <boxGeometry args={[1.8, 0.06, 0.85]} />
      </mesh>

      {/* Caster Wheels */}
      {[-0.75, 0.75].map((x) =>
        [-0.38, 0.38].map((z, idx) => (
          <group key={`${x}-${idx}`} position={[x, 0.07, z]}>
            <mesh material={darkSteel} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.045, 0.045, 0.03, 16]} />
            </mesh>
            <mesh position={[0, 0.06, 0]} material={chromeMetal}>
              <cylinderGeometry args={[0.015, 0.015, 0.08, 12]} />
            </mesh>
          </group>
        ))
      )}

      {/* Mattress Sections (Articulated Hospital Deck) */}
      {/* Head / Backrest section (tilted up) */}
      <group position={[-0.45, 0.38, 0]} rotation={[0, 0, 0.25]}>
        <mesh material={hospitalBlue} castShadow>
          <boxGeometry args={[0.6, 0.1, 0.78]} />
        </mesh>
      </group>
      {/* Middle Flat Torso Section */}
      <mesh position={[0.05, 0.32, 0]} material={hospitalBlue} castShadow>
        <boxGeometry args={[0.45, 0.1, 0.78]} />
      </mesh>
      {/* Leg Section (slightly articulated) */}
      <group position={[0.55, 0.31, 0]} rotation={[0, 0, -0.05]}>
        <mesh material={hospitalBlue} castShadow>
          <boxGeometry args={[0.55, 0.1, 0.78]} />
        </mesh>
      </group>

      {/* Curved Ergonomic Headboard */}
      <mesh position={[-0.92, 0.52, 0]} material={clinicalWhite} castShadow>
        <boxGeometry args={[0.05, 0.5, 0.88]} />
      </mesh>
      <mesh position={[-0.92, 0.65, 0]} material={ufiBlue}>
        <boxGeometry args={[0.055, 0.08, 0.6]} />
      </mesh>

      {/* Footboard */}
      <mesh position={[0.92, 0.45, 0]} material={clinicalWhite} castShadow>
        <boxGeometry args={[0.05, 0.4, 0.88]} />
      </mesh>

      {/* Collapsible Side Safety Rails */}
      {[-0.42, 0.42].map((z) => (
        <group key={`rail-${z}`} position={[0, 0.48, z]}>
          <mesh material={chromeMetal}>
            <boxGeometry args={[1.1, 0.03, 0.02]} />
          </mesh>
          <mesh position={[0, -0.08, 0]} material={chromeMetal}>
            <boxGeometry args={[1.1, 0.03, 0.02]} />
          </mesh>
          {[-0.45, -0.15, 0.15, 0.45].map((rx) => (
            <mesh key={rx} position={[rx, -0.04, 0]} material={ufiBlue}>
              <cylinderGeometry args={[0.012, 0.012, 0.15, 12]} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// 4. Executive Office Desk
export function OfficeDesk3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.45, 0]}>
      {/* Top Work Surface (Warm walnut laminate) */}
      <mesh position={[0, 0.7, 0]} material={woodDark} castShadow>
        <boxGeometry args={[1.7, 0.045, 0.85]} />
      </mesh>

      {/* Left Steel Box Leg (Architectural loop) */}
      <mesh position={[-0.72, 0.35, 0.35]} material={darkSteel} castShadow>
        <boxGeometry args={[0.05, 0.68, 0.05]} />
      </mesh>
      <mesh position={[-0.72, 0.35, -0.35]} material={darkSteel} castShadow>
        <boxGeometry args={[0.05, 0.68, 0.05]} />
      </mesh>
      <mesh position={[-0.72, 0.03, 0]} material={darkSteel}>
        <boxGeometry args={[0.05, 0.04, 0.75]} />
      </mesh>
      <mesh position={[-0.72, 0.67, 0]} material={darkSteel}>
        <boxGeometry args={[0.05, 0.04, 0.75]} />
      </mesh>

      {/* Right Drawer Pedestal (3 Lockable Drawers) */}
      <group position={[0.55, 0.36, 0]}>
        <mesh material={darkSteel} castShadow>
          <boxGeometry args={[0.42, 0.64, 0.75]} />
        </mesh>
        {/* Drawer Fronts (Wood with chrome pulls) */}
        {[0.2, 0.0, -0.2].map((dy, idx) => (
          <group key={idx} position={[0, dy, 0.38]}>
            <mesh material={woodDark}>
              <boxGeometry args={[0.39, 0.18, 0.02]} />
            </mesh>
            <mesh position={[0, 0, 0.02]} material={chromeMetal}>
              <boxGeometry args={[0.12, 0.02, 0.015]} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Perforated Steel Modesty Panel */}
      <mesh position={[-0.1, 0.42, -0.32]} material={ufiBlue} castShadow>
        <boxGeometry args={[1.05, 0.38, 0.02]} />
      </mesh>
    </group>
  );
}

// 5. Contemporary Architectural Metal Sofa
export function MetalSofa3D({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Metal Frame Chassis */}
      <mesh position={[0, 0.22, 0]} material={darkSteel} castShadow>
        <boxGeometry args={[1.65, 0.05, 0.75]} />
      </mesh>

      {/* 4 Steel Stiletto Legs */}
      {[-0.72, 0.72].map((x) =>
        [-0.32, 0.32].map((z, idx) => (
          <mesh key={`${x}-${idx}`} position={[x, 0.1, z]} material={ufiBlue}>
            <cylinderGeometry args={[0.02, 0.015, 0.2, 12]} />
          </mesh>
        ))
      )}

      {/* Seat Cushions (2-seater deep sofa pads) */}
      <mesh position={[-0.38, 0.32, 0.03]} material={sofaFabric} castShadow>
        <boxGeometry args={[0.72, 0.16, 0.65]} />
      </mesh>
      <mesh position={[0.38, 0.32, 0.03]} material={sofaFabric} castShadow>
        <boxGeometry args={[0.72, 0.16, 0.65]} />
      </mesh>

      {/* Backrest Cushions */}
      <mesh position={[-0.38, 0.56, -0.25]} material={sofaFabric} castShadow>
        <boxGeometry args={[0.72, 0.35, 0.16]} />
      </mesh>
      <mesh position={[0.38, 0.56, -0.25]} material={sofaFabric} castShadow>
        <boxGeometry args={[0.72, 0.35, 0.16]} />
      </mesh>

      {/* Architectural Steel Back & Armrest Tubes */}
      <mesh position={[0, 0.58, -0.34]} material={darkSteel}>
        <boxGeometry args={[1.6, 0.04, 0.04]} />
      </mesh>
      {/* Left Armrest */}
      <mesh position={[-0.78, 0.44, 0.02]} material={darkSteel}>
        <boxGeometry args={[0.04, 0.04, 0.68]} />
      </mesh>
      {/* Right Armrest */}
      <mesh position={[0.78, 0.44, 0.02]} material={darkSteel}>
        <boxGeometry args={[0.04, 0.04, 0.68]} />
      </mesh>
    </group>
  );
}

// Selector by category or slug
export default function DetailedFurniture3D({
  slug,
  category,
  autoRotate = false,
}: {
  slug?: string;
  category?: string;
  autoRotate?: boolean;
}) {
  if (slug === 'double-sided-gondola-rack' || category === 'store') {
    return <GondolaRack3D autoRotate={autoRotate} />;
  }
  if (slug === 'two-seater-classroom-bench' || slug === 'student-desk-chair-set' || category === 'school') {
    return <SchoolBench3D autoRotate={autoRotate} />;
  }
  if (slug === 'obstetric-delivery-bed' || slug === 'medicine-trolley' || category === 'hospital') {
    return <HospitalBed3D autoRotate={autoRotate} />;
  }
  if (slug === 'executive-office-desk' || slug === 'ergonomic-mesh-chair' || category === 'office') {
    return <OfficeDesk3D autoRotate={autoRotate} />;
  }
  if (slug === 'metal-sofa-set' || category === 'home') {
    return <MetalSofa3D autoRotate={autoRotate} />;
  }
  // Default to gondola
  return <GondolaRack3D autoRotate={autoRotate} />;
}

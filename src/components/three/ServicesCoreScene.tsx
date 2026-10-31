"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function CoreObject() {
  const coreRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.16;
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.12;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.12;
      outerRingRef.current.rotation.x += delta * 0.04;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.18;
      innerRingRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group>
      {/* Central energy core */}
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.25}>
        <group ref={coreRef}>
          <mesh>
            <icosahedronGeometry args={[1.12, 2]} />
            <meshPhysicalMaterial
              color="#72A9A1"
              metalness={0.65}
              roughness={0.2}
              transmission={0.35}
              thickness={0.8}
              transparent
              opacity={0.9}
              wireframe
            />
          </mesh>

          <mesh>
            <icosahedronGeometry args={[0.72, 3]} />
            <meshStandardMaterial
              color="#8BC0B6"
              emissive="#397E78"
              emissiveIntensity={1.8}
              metalness={0.5}
              roughness={0.25}
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[0.35, 32, 32]} />
            <meshBasicMaterial color="#D2F5ED" />
          </mesh>
        </group>
      </Float>

      {/* Orbital rings */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
          <torusGeometry args={[1.65, 0.012, 12, 160]} />
          <meshBasicMaterial color="#72A9A1" transparent opacity={0.75} />
        </mesh>

        <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
          <torusGeometry args={[1.82, 0.006, 8, 160]} />
          <meshBasicMaterial color="#8BC0B6" transparent opacity={0.35} />
        </mesh>
      </group>

      <group ref={innerRingRef}>
        <mesh rotation={[1.1, 0.5, 0.7]}>
          <torusGeometry args={[1.4, 0.009, 10, 140]} />
          <meshBasicMaterial color="#A1D5CB" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* Floating connection nodes */}
      {[
        [1.8, 0.65, 0.2],
        [-1.7, 0.6, 0.3],
        [0.2, 1.8, -0.2],
        [-0.3, -1.8, 0.2],
        [1.45, -1.05, 0.1],
        [-1.4, -1.1, -0.2],
      ].map((position, index) => (
        <Float
          key={index}
          speed={1.4 + index * 0.15}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshBasicMaterial color="#B6E8DD" />
          </mesh>
        </Float>
      ))}

      <Sparkles
        count={65}
        scale={5}
        size={2}
        speed={0.25}
        color="#8BC0B6"
        opacity={0.65}
      />
    </group>
  );
}

export default function ServicesCoreScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 4]} intensity={2} color="#8BC0B6" />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#397E78" />

        <CoreObject />
      </Canvas>
    </div>
  );
}
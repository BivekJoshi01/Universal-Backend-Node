import { Stars } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import MoonTexture from "../../assets/Office/textures/Moon.png";
import { Outlet } from 'react-router';

const FullScreenCanvas = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00040C;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MoonOrbit: React.FC = () => {
  const moon = useLoader(THREE.TextureLoader, MoonTexture);
  const smallSphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const radius =5;
    const speed = 1;
    const rotationSpeed = 0.5;

    if (smallSphereRef.current) {
      smallSphereRef.current.position.x = radius * Math.cos(elapsedTime * speed);
      smallSphereRef.current.position.y = radius * Math.sin(elapsedTime * speed);
      smallSphereRef.current.position.z = radius * Math.sin(elapsedTime * speed) * 0.7;
      smallSphereRef.current.rotation.y += rotationSpeed * 0.1;
    }
  });

  return (
    <mesh ref={smallSphereRef} scale={[1.2, 1.2, 1.2]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial map={moon} />
    </mesh>
  );
};

const AuthLayout = () => {
  return (
    <FullScreenCanvas>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={15.2} />
          <Stars
            radius={300}
            depth={60}
            count={10000}
            factor={7}
            saturation={0}
            fade={true}
          />
          <MoonOrbit />
        </Suspense>
      </Canvas>

      {/* Centered Outlet content */}
      <Overlay>
        <Outlet />
      </Overlay>
    </FullScreenCanvas>
  );
};

export default AuthLayout;

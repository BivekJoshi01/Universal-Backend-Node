import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import LandEarth from "../components/LandEarth/LandEarth";
import styled from "styled-components";

const FullScreenCanvas = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#00040C
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color:white
`;

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FullScreenCanvas>
      <Canvas>
        <Suspense fallback={null}>
          <LandEarth />
        </Suspense>
      </Canvas>
      <Overlay>{children}</Overlay>
    </FullScreenCanvas>
  );
};

export default LandingLayout;

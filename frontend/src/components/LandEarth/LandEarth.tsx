import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthCloudsMap from "../../assets/Office/textures/8k_earth_clouds.jpg";
import EarthDayMap from "../../assets/Office/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/Office/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/Office/textures/8k_earth_specular_map.jpg";
import Moon from "../../assets/Office/textures/Moon.png";

import { TextureLoader } from "three";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const LandEarth: React.FC = () => {
    const currentPage = useSelector((state: RootState) => state.navigation.currentPage);

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );
    const [moon] = useLoader(TextureLoader, [Moon])

    const earthRef = useRef<THREE.Mesh>(null);
    const cloudsRef = useRef<THREE.Mesh>(null);
    const smallSphereRef = useRef<THREE.Mesh>(null);

    const [earthScale, setEarthScale] = useState(0.1);
    const [cloudsScale, setCloudsScale] = useState(0.1);

    const AboutUsPosition: [number, number, number] = [-1.6, 0, 4.3];
    const DefaultPosition: [number, number, number] = [0, 0, 3];
    const ProductPosition: [number, number, number] = [0, 0, 4];
    const PartnerPosition: [number, number, number] = [1.6, 0, 4.3];

    let targetPosition: [number, number, number];

    switch (currentPage) {
        case "Home":
            targetPosition = DefaultPosition;
            break;
        case "About Us":
            targetPosition = AboutUsPosition;
            break;
        case "Products":
            targetPosition = ProductPosition;
            break;
        case "Partners":
            targetPosition = PartnerPosition;
            break;
        default:
            targetPosition = DefaultPosition;
            break;
    }

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        if (earthRef.current && cloudsRef.current) {
            earthRef.current.position.lerp(new THREE.Vector3(...targetPosition), 0.05);
            cloudsRef.current.position.lerp(new THREE.Vector3(...targetPosition), 0.05);
        }

        if (earthRef.current) {
            if (earthScale < 1) {
                setEarthScale((prevScale) => Math.min(prevScale + 0.01, 1));
            }
            earthRef.current.rotation.y = elapsedTime / 6;
        }

        if (cloudsRef.current) {
            if (cloudsScale < 1) {
                setCloudsScale((prevScale) => Math.min(prevScale + 0.01, 1));
            }
            cloudsRef.current.rotation.y = elapsedTime / 6;
        }

        // Make the small sphere orbit around the Earth
        if (smallSphereRef.current && earthRef.current) {
            const radius = 2; // Distance from Earth
            const speed = 0.5; // Orbiting speed
            const rotationSpeed = 0.2;

            smallSphereRef.current.position.x = earthRef.current.position.x + radius * Math.cos(elapsedTime * speed);
            smallSphereRef.current.position.z = earthRef.current.position.z + radius * Math.sin(elapsedTime * speed);
            smallSphereRef.current.position.y = earthRef.current.position.y + Math.sin(elapsedTime * 0.5); // Slight up-down motion

            smallSphereRef.current.rotation.y += rotationSpeed * 0.1;
        }
    });

    return (
        <>
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
            <Stars
                radius={300}
                depth={60}
                count={100}
                factor={43}
                saturation={0}
                fade={true}
            />
            {/* Clouds */}
            <mesh ref={cloudsRef} scale={[cloudsScale, cloudsScale, cloudsScale]}>
                <sphereGeometry args={[1.009, 32, 32]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    opacity={0.4}
                    depthWrite={true}
                    transparent={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* Earth */}
            <mesh ref={earthRef} scale={[earthScale, earthScale, earthScale]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.4}
                    roughness={0.7}
                />
            </mesh>
            <mesh ref={smallSphereRef} scale={[0.6, 0.6, 0.6]}>
                <sphereGeometry args={[0.2, 16, 16]} />
                <meshStandardMaterial map={moon} />
            </mesh>
        </>
    );
};

export default LandEarth;

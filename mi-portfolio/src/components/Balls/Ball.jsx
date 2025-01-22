import React, { useRef } from "react";
import { Sphere, Html } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./Balls3D.module.css";

export const Ball = ({ project }) => {
  const sphereRef = useRef();

  const neptuneTexture = useLoader(
    THREE.TextureLoader,
    "/public/2k_earth_daymap.jpg"
  );

  // Animar rotación de la esfera
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.004; // Velocidad de rotación
    }
  });

  return (
    <Sphere ref={sphereRef} args={[2, 128, 128]} scale={2.5}>
      <meshStandardMaterial map={neptuneTexture} />

      {/* HTML dentro de la bola */}
      <Html
        position={[0, 0, 1.5]}
        wrapperClass={styles.insideBall}
        distanceFactor={8}
        transform={false}
      >
        <div className={styles.projectImagesWrapper}>
          {project.tech.map((tech, index) => (
            <div key={index} className={styles.projectImageWrapper}>
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectImageLink}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className={styles.projectImage}
                />
              </a>
            </div>
          ))}
        </div>
      </Html>
    </Sphere>
  );
};

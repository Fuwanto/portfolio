import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Sphere } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const OrbitalProject = ({ project }) => {
  const planetRef = useRef();
  const satellitesRef = useRef([]);
  const [hoveredSatellite, setHoveredSatellite] = useState(null);

  // Tamaños
  const PLANET_RADIUS = 2.8;
  const SATELLITE_RADIUS = 0.7;
  const ORBIT_RADIUS = PLANET_RADIUS * 2;

  const [planetTexture] = useLoader(THREE.TextureLoader, ["2k_neptune.jpg"]);

  const techTextures = useLoader(
    THREE.TextureLoader,
    project.tech.map((t) => t.image_planet)
  );

  useFrame((state, delta) => {
    // Rotación del planeta
    planetRef.current.rotation.y += delta * 0.25;

    // Animación de los satélites
    satellitesRef.current.forEach((sat, i) => {
      if (hoveredSatellite === i) {
        sat.scale.lerp(new THREE.Vector3(2, 2, 2), 0.1); // Aumentar tamaño
      } else {
        // Movimiento orbital normal
        const satAngle = Date.now() * 0.0005 * (i % 2 ? 1 : -1);
        sat.position.x = Math.cos(satAngle + i) * ORBIT_RADIUS;
        sat.position.z = Math.sin(satAngle + i) * ORBIT_RADIUS;
        sat.position.y = Math.sin(Date.now() * 0.001 + i) * 0.3;
        sat.rotation.y += delta * 0.8;
        sat.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1); // Tamaño normal
      }
    });
  });

  return (
    <group>
      {/* Planeta principal */}
      <Sphere ref={planetRef} args={[PLANET_RADIUS, 128, 128]}>
        <meshStandardMaterial
          map={planetTexture}
          metalness={0.4}
          roughness={0.6}
        />
      </Sphere>

      {/* Satélites */}
      {project.tech.map((tech, i) => {
        const texture = techTextures[i];
        return (
          <mesh
            key={i}
            ref={(el) => (satellitesRef.current[i] = el)}
            position={[ORBIT_RADIUS, 0, 0]}
            onClick={() => window.open(tech.url, "_blank")}
            onPointerOver={() => {
              setHoveredSatellite(i); // Activar hover
              document.body.style.cursor = "pointer"; // Cambiar cursor
            }}
            onPointerOut={() => {
              setHoveredSatellite(null); // Desactivar hover
              document.body.style.cursor = "auto"; // Restaurar cursor
            }}
          >
            <sphereGeometry args={[SATELLITE_RADIUS, 64, 64]} />
            <meshBasicMaterial
              map={texture}
              transparent
              alphaTest={0.5}
              toneMapped={true}
            />
          </mesh>
        );
      })}
    </group>
  );
};

OrbitalProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default OrbitalProject;

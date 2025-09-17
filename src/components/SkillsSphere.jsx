import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

function SkillPlanet({ position, label, color, size }) {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={[0, 0, size + 0.2]}
        fontSize={size * 0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function SkillsSphere() {
  // Orbit planets around the center based on time
  const planets = React.useMemo(
    () => [
      { label: "C++", color: "#f9973b", size: 0.5, radius: 2.5, speed: 0.8 },
      { label: "Python", color: "#306998", size: 0.6, radius: 3.5, speed: 0.6 },
      {
        label: "Web Dev",
        color: "#e34c26",
        size: 0.7,
        radius: 4.5,
        speed: 0.4,
      },
      { label: "DSA", color: "#17a2b6", size: 0.5, radius: 3, speed: 0.71 },
      { label: "PyTorch", color: "#EE4C2C", size: 0.6, radius: 4, speed: 0.5 },
      { label: "SQL", color: "#10A37F", size: 0.6, radius: 4.5, speed: 0.64 },
      { label: "Nodejs", color: "pink", size: 0.52, radius: 3, speed: 0.26 },
      { label: "Mongodb", color: "brown", size: 0.55, radius: 5, speed: 0.3 },
      { label: "React", color: "green", size: 0.6, radius: 5.5, speed: 0.35 },
      { label: "Git", color: "black", size: 0.5, radius: 6, speed: 0.25 },
      {
        label: "Transformer",
        color: "#36cfdaff",
        size: 0.56,
        radius: 5.3,
        speed: 0.44,
      },
      // Add more skills as needed
    ],
    []
  );

  return (
    <div style={{ width: "100%", height: "100vh", maxHeight: "800px" }}>
      <Canvas
        style={{ height: "100%", width: "100%" }}
        camera={{ position: [0, 0, 10], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitControls enableZoom={true} enablePan={true} />

        {/* Central sphere */}
        <mesh>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={0.7}
          />
          <Text
            position={[0, 0, 1.21]}
            fontSize={0.5}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            SKILLS
          </Text>
        </mesh>

        {/* Orbiting planets */}
        {planets.map((p, i) => {
          return <OrbitingPlanet key={i} {...p} />;
        })}
      </Canvas>
    </div>
  );
}

function OrbitingPlanet({ label, color, size, radius, speed }) {
  const ref = React.useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    // Add slight vertical movement for more interesting orbit
    ref.current.position.y = Math.sin(t * 1.5) * radius * 0.3;
  });

  return (
    <group ref={ref}>
      <SkillPlanet
        position={[0, 0, 0]}
        label={label}
        color={color}
        size={size}
      />
    </group>
  );
}

export default SkillsSphere;

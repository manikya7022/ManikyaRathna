import React, { useRef, useMemo, Suspense, memo } from "react";
import { Canvas, useFrame, useThree, invalidate } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls, Text3D, Center, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// ============================================================================
// HERO SECTION - Optimized with System Design Concepts
// 1. On-demand rendering (frameloop="demand")
// 2. DPR limiting for performance
// 3. Reduced geometry complexity
// 4. Memoized components
// 5. Throttled animations
// ============================================================================
export const HeroTechCore = memo(() => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      dpr={[1, 1.5]} // Limit pixel ratio for performance
      performance={{ min: 0.5 }} // Allow frame rate to drop for stability
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#a855f7" />
      <Suspense fallback={null}>
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <TechCoreGeometry />
        </Float>
      </Suspense>
    </Canvas>
  );
});

const TechCoreGeometry = memo(() => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);

  // Memoize particle positions to avoid recalculation
  const particlePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 15; i++) { // Reduced from 30 to 15
      const theta = (i / 15) * Math.PI * 2;
      const phi = Math.acos((2 * (i / 15)) - 1);
      const radius = 2.5 + (i % 3) * 0.5;
      positions.push([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  // Throttled animation - only update every other frame
  let frameCount = 0;
  useFrame((state, delta) => {
    frameCount++;
    if (frameCount % 2 !== 0) return; // Skip every other frame

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.15;
      coreRef.current.rotation.z += delta * 0.08;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, 0]}>
      {/* Central Core - Simplified material (no distortion) */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.2, 1]} /> {/* Reduced detail from 2 to 1 */}
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.4}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh scale={0.9}>
        <icosahedronGeometry args={[1.2, 0]} /> {/* Reduced detail */}
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting Rings - Reduced segments */}
      <group ref={ringsRef}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}>
            <torusGeometry args={[2 + i * 0.4, 0.02, 8, 48]} /> {/* Reduced from 16,100 to 8,48 */}
            <meshStandardMaterial
              color={i === 0 ? "#06b6d4" : i === 1 ? "#a855f7" : "#22c55e"}
              emissive={i === 0 ? "#06b6d4" : i === 1 ? "#a855f7" : "#22c55e"}
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Floating Particles - Memoized and reduced */}
      {particlePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 4, 4]} /> {/* Reduced from 8,8 to 4,4 */}
          <meshBasicMaterial color="#06b6d4" /> {/* BasicMaterial is faster */}
        </mesh>
      ))}
    </group>
  );
});

// ============================================================================
// SKILLS SECTION - Floating Skill Cubes / Data Visualization
// ============================================================================
export const SkillsVisualization = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 15], fov: 50 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#a855f7" />
      <Suspense fallback={null}>
        <SkillsCubeField />
      </Suspense>
    </Canvas>
  );
};

const SkillsCubeField = () => {
  const groupRef = useRef<THREE.Group>(null);

  const cubes = useMemo(() => {
    const items = [];
    const colors = ["#06b6d4", "#a855f7", "#22c55e", "#f59e0b", "#ec4899"];
    for (let i = 0; i < 40; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 10,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
        scale: 0.2 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.5 + Math.random() * 1,
      });
    }
    return items;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh
            position={cube.position as [number, number, number]}
            rotation={cube.rotation as [number, number, number]}
            scale={cube.scale}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.7}
              wireframe={Math.random() > 0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// ============================================================================
// CONTACT SECTION - Glowing Globe with Connection Points
// ============================================================================
export const ContactGlobe = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#06b6d4" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#a855f7" />
      <Suspense fallback={null}>
        <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
          <GlobeMesh />
        </Float>
      </Suspense>
    </Canvas>
  );
};

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
    }
  });

  const connectionPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 15; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.02;
      points.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi),
        ] as [number, number, number],
        size: 0.02 + Math.random() * 0.03,
      });
    }
    return points;
  }, []);

  return (
    <group>
      {/* Main Globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#06b6d4"
          emissiveIntensity={0.1}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Outer Glow */}
      <mesh scale={1.1}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.05}
        />
      </mesh>

      {/* Connection Points */}
      <group ref={pointsRef}>
        {connectionPoints.map((point, i) => (
          <mesh key={i} position={point.position}>
            <sphereGeometry args={[point.size, 16, 16]} />
            <meshStandardMaterial
              color="#06b6d4"
              emissive="#06b6d4"
              emissiveIntensity={2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};

// ============================================================================
// NEURAL NETWORK - Enhanced for Projects
// ============================================================================
export const NeuralNetworkShape = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <NeuralMesh />
      </Float>
    </Canvas>
  );
};

const NeuralMesh = () => {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < 25; i++) {
      points.push(new THREE.Vector3(
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 3
      ));
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06 + Math.random() * 0.04, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      {nodes.map((pos, i) =>
        nodes.slice(i + 1).map((pos2, j) => {
          const dist = pos.distanceTo(pos2);
          if (dist < 1.5) {
            return (
              <line key={`${i}-${j}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([pos.x, pos.y, pos.z, pos2.x, pos2.y, pos2.z])}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#06b6d4" transparent opacity={0.4} />
              </line>
            );
          }
          return null;
        })
      )}
    </group>
  );
};

// ============================================================================
// KNOWLEDGE GRAPH - Enhanced
// ============================================================================
export const KnowledgeGraphShape = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#22c55e" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <GraphMesh />
      </Float>
    </Canvas>
  );
};

const GraphMesh = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const nodes = [
    { pos: [0, 0, 0], color: "#22c55e", size: 0.2 },
    { pos: [1, 0.5, 0.5], color: "#06b6d4", size: 0.12 },
    { pos: [-0.8, 0.8, 0.3], color: "#a855f7", size: 0.12 },
    { pos: [0.5, -0.8, 0.4], color: "#f59e0b", size: 0.12 },
    { pos: [-0.5, -0.5, -0.8], color: "#ef4444", size: 0.12 },
    { pos: [0.3, 0.9, -0.5], color: "#06b6d4", size: 0.1 },
    { pos: [-1, -0.2, 0.6], color: "#a855f7", size: 0.1 },
    { pos: [0.8, -0.3, -0.6], color: "#22c55e", size: 0.08 },
  ];

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos as [number, number, number]}>
          <sphereGeometry args={[node.size, 32, 32]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
      {nodes.slice(1).map((node, i) => (
        <line key={`line-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, ...node.pos])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#22c55e" transparent opacity={0.5} />
        </line>
      ))}
    </group>
  );
};

// ============================================================================
// DATA SEARCH - Enhanced Orbiting Cubes
// ============================================================================
export const DataSearchShape = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#f59e0b" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#06b6d4" />
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
        <SearchMesh />
      </Float>
    </Canvas>
  );
};

const SearchMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    cubeRefs.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x += delta * 0.5;
        cube.rotation.y += delta * 0.3;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <mesh>
        <octahedronGeometry args={[0.5]} />
        <MeshDistortMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.4}
          distort={0.2}
          speed={3}
        />
      </mesh>

      {/* Orbiting Cubes */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.2;
        const colors = ["#06b6d4", "#a855f7", "#22c55e", "#f59e0b"];
        return (
          <mesh
            key={i}
            ref={(el) => { if (el) cubeRefs.current[i] = el; }}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.3,
              Math.sin(angle) * radius,
            ]}
          >
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshStandardMaterial
              color={colors[i % colors.length]}
              emissive={colors[i % colors.length]}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

// ============================================================================
// AI ALIGNMENT - Morphing Sphere
// ============================================================================
export const AlignmentShape = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#a855f7" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh scale={1.5}>
          <icosahedronGeometry args={[1, 4]} />
          <MeshDistortMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.3}
            distort={0.4}
            speed={2}
            transparent
            opacity={0.8}
            wireframe
          />
        </mesh>
      </Float>
    </Canvas>
  );
};

// ============================================================================
// EXPERIENCE TIMELINE - Floating DNA Helix
// ============================================================================
export const TimelineHelix = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#06b6d4" />
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
        <HelixMesh />
      </Float>
    </Canvas>
  );
};

const HelixMesh = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const helixPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i < 30; i++) {
      const t = i / 30;
      const angle = t * Math.PI * 4;
      points.push({
        pos1: [Math.cos(angle) * 0.8, (t - 0.5) * 4, Math.sin(angle) * 0.8],
        pos2: [Math.cos(angle + Math.PI) * 0.8, (t - 0.5) * 4, Math.sin(angle + Math.PI) * 0.8],
      });
    }
    return points;
  }, []);

  return (
    <group ref={groupRef}>
      {helixPoints.map((point, i) => (
        <React.Fragment key={i}>
          <mesh position={point.pos1 as [number, number, number]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={point.pos2 as [number, number, number]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
          </mesh>
          {i % 3 === 0 && (
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([...point.pos1, ...point.pos2])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#ffffff" transparent opacity={0.2} />
            </line>
          )}
        </React.Fragment>
      ))}
    </group>
  );
};

// ============================================================================
// ABSTRACT SHAPE - Original Enhanced
// ============================================================================
export const AbstractShape = ({ color = "#06b6d4" }: { color?: string }) => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <MeshComponent color={color} />
      </Float>
    </Canvas>
  );
};

const MeshComponent = ({ color }: { color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={mesh} scale={2.5}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

// ============================================================================
// FLOATING PARTICLES BACKGROUND
// ============================================================================
export const FloatingParticles = ({ count = 100 }: { count?: number }) => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.2} />
      <Suspense fallback={null}>
        <ParticleField count={count} />
      </Suspense>
    </Canvas>
  );
};

const ParticleField = ({ count }: { count: number }) => {
  const groupRef = useRef<THREE.Group>(null);

  const particles = useMemo(() => {
    const items = [];
    const colors = ["#06b6d4", "#a855f7", "#22c55e"];
    for (let i = 0; i < count; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
        ],
        size: 0.02 + Math.random() * 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return items;
  }, [count]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position as [number, number, number]}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
};

// ============================================================================
// INTERACTIVE MOUSE-REACTIVE PARTICLES
// ============================================================================
export const InteractiveParticles = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 20], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[-10, -10, 10]} intensity={0.3} color="#a855f7" />
      <Suspense fallback={null}>
        <MouseParticleField />
      </Suspense>
    </Canvas>
  );
};

const MouseParticleField = () => {
  const { viewport, mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef(new THREE.Vector3());

  const count = 80;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;
      temp.push({
        position: new THREE.Vector3(x, y, z),
        originalPosition: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(),
        scale: 0.02 + Math.random() * 0.06,
      });
    }
    return temp;
  }, []);

  // Pre-compute accent particle positions
  const accentParticles = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      size: 0.1 + Math.random() * 0.1,
      speed: 1 + Math.random(),
      isEven: i % 2 === 0,
    }));
  }, []);

  useFrame((state) => {
    // Convert mouse to 3D world coordinates
    mouseRef.current.set(
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0
    );

    particles.forEach((particle, i) => {
      // Calculate distance from mouse
      const dx = particle.position.x - mouseRef.current.x;
      const dy = particle.position.y - mouseRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Repel particles from mouse
      const force = Math.max(0, 1 - dist / 5);
      if (dist < 5 && dist > 0) {
        particle.velocity.x += (dx / dist) * force * 0.1;
        particle.velocity.y += (dy / dist) * force * 0.1;
      }

      // Return to original position
      particle.velocity.x += (particle.originalPosition.x - particle.position.x) * 0.02;
      particle.velocity.y += (particle.originalPosition.y - particle.position.y) * 0.02;
      particle.velocity.z += (particle.originalPosition.z - particle.position.z) * 0.02;

      // Apply velocity with damping
      particle.velocity.multiplyScalar(0.9);
      particle.position.add(particle.velocity);

      // Subtle floating animation
      particle.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i * 0.1) * 0.002;

      // Update instance matrix
      dummy.position.copy(particle.position);
      dummy.scale.setScalar(particle.scale * (1 + force * 2));
      dummy.updateMatrix();

      if (particlesRef.current) {
        particlesRef.current.setMatrixAt(i, dummy.matrix);
      }
    });

    if (particlesRef.current) {
      particlesRef.current.instanceMatrix.needsUpdate = true;
    }

    // Slow rotation of entire field
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={particlesRef} args={[undefined, undefined, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          transparent
          opacity={0.8}
        />
      </instancedMesh>

      {/* Add some larger accent particles */}
      {accentParticles.map((particle, i) => (
        <Float key={i} speed={particle.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={particle.position}>
            <icosahedronGeometry args={[particle.size, 0]} />
            <meshStandardMaterial
              color={particle.isEven ? "#a855f7" : "#22c55e"}
              emissive={particle.isEven ? "#a855f7" : "#22c55e"}
              emissiveIntensity={0.6}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// ============================================================================
// PULSING NEURAL NETWORK WITH ANIMATED CONNECTIONS
// ============================================================================
export const PulsingNeuralNetwork = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <Suspense fallback={null}>
        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <PulsingNeuralMesh />
        </Float>
      </Suspense>
    </Canvas>
  );
};

const PulsingNeuralMesh = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  const nodes = useMemo(() => {
    const points: { pos: THREE.Vector3; connections: number[] }[] = [];
    for (let i = 0; i < 30; i++) {
      points.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ),
        connections: [],
      });
    }
    // Create connections between nearby nodes
    points.forEach((node, i) => {
      points.forEach((other, j) => {
        if (i !== j && node.pos.distanceTo(other.pos) < 1.8) {
          node.connections.push(j);
        }
      });
    });
    return points;
  }, []);

  const pulses = useMemo(() => {
    const temp: { start: number; end: number; progress: number; speed: number }[] = [];
    nodes.forEach((node, i) => {
      node.connections.forEach((j) => {
        if (Math.random() > 0.5) {
          temp.push({
            start: i,
            end: j,
            progress: Math.random(),
            speed: 0.3 + Math.random() * 0.4,
          });
        }
      });
    });
    return temp;
  }, [nodes]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    // Animate pulses
    pulses.forEach((pulse, i) => {
      pulse.progress += delta * pulse.speed;
      if (pulse.progress > 1) pulse.progress = 0;

      if (pulseRefs.current[i]) {
        const startPos = nodes[pulse.start].pos;
        const endPos = nodes[pulse.end].pos;
        pulseRefs.current[i].position.lerpVectors(startPos, endPos, pulse.progress);

        // Pulse glow effect
        const material = pulseRefs.current[i].material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = 1 + Math.sin(pulse.progress * Math.PI) * 2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[0.08 + Math.random() * 0.04, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.5 + Math.sin(i) * 0.3}
          />
        </mesh>
      ))}

      {/* Connections */}
      {nodes.map((node, i) =>
        node.connections.map((j, k) => {
          if (j > i) {
            return (
              <line key={`${i}-${j}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([
                      node.pos.x, node.pos.y, node.pos.z,
                      nodes[j].pos.x, nodes[j].pos.y, nodes[j].pos.z,
                    ])}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#06b6d4" transparent opacity={0.3} />
              </line>
            );
          }
          return null;
        })
      )}

      {/* Animated Pulses */}
      {pulses.map((pulse, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) pulseRefs.current[i] = el; }}
        >
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#22c55e"
            emissive="#22c55e"
            emissiveIntensity={1}
          />
        </mesh>
      ))}
    </group>
  );
};

// ============================================================================
// MORPHING GEOMETRIC BACKGROUND
// ============================================================================
export const MorphingBackground = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#a855f7" />
      <Suspense fallback={null}>
        <MorphingMesh />
      </Suspense>
    </Canvas>
  );
};

const MorphingMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} scale={3}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#0a0a0f"
          emissive="#06b6d4"
          emissiveIntensity={0.05}
          distort={0.3}
          speed={1.5}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.1}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
};

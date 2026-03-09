import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'
import Particles from './Particles'
import Lights from './Lights'

function TechSphere() {
    const meshRef = useRef()

    useFrame((state) => {
        if (!meshRef.current) return
        meshRef.current.rotation.y += 0.003
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    })

    return (
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1}>
            <group ref={meshRef}>
                {/* Main sphere */}
                <Sphere args={[1.8, 64, 64]}>
                    <MeshDistortMaterial
                        color="#7c3aed"
                        emissive="#4c1d95"
                        emissiveIntensity={0.4}
                        roughness={0.2}
                        metalness={0.8}
                        distort={0.3}
                        speed={2}
                        transparent
                        opacity={0.85}
                    />
                </Sphere>

                {/* Wireframe overlay */}
                <Sphere args={[2.0, 32, 32]}>
                    <meshBasicMaterial
                        color="#06b6d4"
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Sphere>

                {/* Outer glow ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[2.5, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
                </mesh>

                <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
                    <torusGeometry args={[2.8, 0.015, 16, 100]} />
                    <meshBasicMaterial color="#7c3aed" transparent opacity={0.25} />
                </mesh>
            </group>
        </Float>
    )
}

export default function Scene() {
    return (
        <>
            <Lights />
            <Particles count={1200} />
            <TechSphere />
        </>
    )
}

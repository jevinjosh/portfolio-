import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float, Text } from '@react-three/drei'

const techItems = [
    { text: 'React', color: '#61dafb' },
    { text: 'Java', color: '#f89820' },
    { text: 'JS', color: '#f7df1e' },
    { text: 'Mongo', color: '#4db33d' },
    { text: 'HTML', color: '#e34f26' },
    { text: 'CSS', color: '#264de4' },
]

function CubeFace({ text, color, position, rotation }) {
    return (
        <group position={position} rotation={rotation}>
            <mesh>
                <planeGeometry args={[1.6, 1.6]} />
                <meshStandardMaterial
                    color="#1a1a2e"
                    transparent
                    opacity={0.8}
                    emissive={color}
                    emissiveIntensity={0.1}
                />
            </mesh>
            <Text
                position={[0, 0, 0.01]}
                fontSize={0.35}
                color={color}
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2"
            >
                {text}
            </Text>
        </group>
    )
}

export default function TechCube() {
    const cubeRef = useRef()

    useFrame((state) => {
        if (!cubeRef.current) return
        cubeRef.current.rotation.y += 0.005
        cubeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    })

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <group ref={cubeRef}>
                {/* Wireframe cube */}
                <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.08} smoothness={4}>
                    <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.3} />
                </RoundedBox>

                {/* Faces with tech labels */}
                <CubeFace text={techItems[0].text} color={techItems[0].color} position={[0, 0, 0.91]} rotation={[0, 0, 0]} />
                <CubeFace text={techItems[1].text} color={techItems[1].color} position={[0, 0, -0.91]} rotation={[0, Math.PI, 0]} />
                <CubeFace text={techItems[2].text} color={techItems[2].color} position={[0.91, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
                <CubeFace text={techItems[3].text} color={techItems[3].color} position={[-0.91, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
                <CubeFace text={techItems[4].text} color={techItems[4].color} position={[0, 0.91, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                <CubeFace text={techItems[5].text} color={techItems[5].color} position={[0, -0.91, 0]} rotation={[Math.PI / 2, 0, 0]} />
            </group>
        </Float>
    )
}

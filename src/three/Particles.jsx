import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles({ count = 1500 }) {
    const mesh = useRef()

    const [positions, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3)
        const sz = new Float32Array(count)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 50
            pos[i * 3 + 1] = (Math.random() - 0.5) * 50
            pos[i * 3 + 2] = (Math.random() - 0.5) * 50
            sz[i] = Math.random() * 2 + 0.5
        }
        return [pos, sz]
    }, [count])

    useFrame((state) => {
        if (!mesh.current) return
        const time = state.clock.elapsedTime * 0.1
        mesh.current.rotation.y = time * 0.2
        mesh.current.rotation.x = Math.sin(time * 0.3) * 0.1
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#7c3aed"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    )
}

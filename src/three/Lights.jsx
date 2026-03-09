export default function Lights() {
    return (
        <>
            <ambientLight intensity={0.15} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#7c3aed" />
            <pointLight position={[-5, -5, 5]} intensity={0.6} color="#06b6d4" />
            <pointLight position={[0, 5, -5]} intensity={0.4} color="#ec4899" />
            <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={1}
                intensity={0.5}
                color="#7c3aed"
            />
        </>
    )
}

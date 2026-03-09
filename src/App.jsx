import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading assets/3D models
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <CustomCursor />
            <LoadingScreen isLoading={isLoading} />

            {!isLoading && (
                <div className="relative">
                    <Navbar />
                    <main>
                        <Hero3D />
                        <About />
                        <Projects />
                        <Education />
                        <Contact />
                    </main>
                </div>
            )}
        </>
    )
}

export default App

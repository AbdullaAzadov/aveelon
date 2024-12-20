import { useEffect, useState } from "react"

export const useScreenType = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const isTablet = windowWidth <= 1024 && windowWidth > 768
    const isMobile = windowWidth <= 768
    const isSmallMobile = windowWidth <= 480
    const isDesktop = windowWidth > 1024

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => 
            window.removeEventListener('resize', handleResize)
    }, [] )
    return {isTablet, isMobile, isDesktop, isSmallMobile, windowWidth}

}
import { useState, useEffect } from 'react';

interface ScreenDimensions {
    width: number;
    height: number;
}

function getScreenDimensions() : ScreenDimensions {
    const dimensions: ScreenDimensions = { width: window.innerWidth, height: window.innerHeight };
    return dimensions;
}

export default function UseScreenDimensions() : ScreenDimensions {
    const [dimensions, setDimensions] = useState(getScreenDimensions());
    
    useEffect(() => {
        const handleScreenResize = () => setDimensions(getScreenDimensions());
        window.addEventListener('resize', handleScreenResize);
        return () => window.removeEventListener('resize', handleScreenResize);  
    }, []);

    return dimensions;
}

/* @UseScreenDimensions: 
 * Simple hook to get the width/height of the window while listening to changes.
 *
 * @Usage: 
 *
 * export default function myComponent() {
 *     const { width, height } = UseScreenDimensions();
 * }
 *
 */

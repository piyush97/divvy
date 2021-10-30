import React, { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(async () => {
        if (typeof window !== "undefined") {
            const localDisplayMode = await localStorage.getItem('divvy_display_mode');
            console.log('displaymode',localDisplayMode);
            return localDisplayMode || 'light';
        }
        return 'light';
    });
    const toggleMode = () => {
        if(mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            const localDisplayMode = localStorage.getItem('divvy_display_mode');
            setMode(localDisplayMode || 'light')
        }
    },[]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('divvy_display_mode', mode);
        }
    },[mode]);
    
    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
                {children}
        <style jsx global>{`
          body {
            background-color: ${ mode === 'dark' ? '#374151' : '' };
          }
        `}
        </style>
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
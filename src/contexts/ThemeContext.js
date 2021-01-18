import React, { createContext, useState } from 'react';
import { ThemeProvider as Theme } from '@material-ui/core/styles';
import { darkTheme,lightTheme } from 'static/theme/themeBuilder'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false)

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <Theme theme={dark ? darkTheme : lightTheme}>
                {children}
            </Theme>
        </ThemeContext.Provider>
    )
}

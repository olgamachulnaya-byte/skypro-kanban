import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'
import { ThemeContext } from './ThemeContext'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.appBg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

const lightTheme = {
  name: 'light',
  colors: {
    appBg: '#f1f1f1',
    surface: '#ffffff',
    boardBg: '#eaeef6',
    textPrimary: '#000000',
    textSecondary: '#94a6be',
    primary: '#565eef',
    primaryHover: '#33399b',
    border: 'rgba(148, 166, 190, 0.4)',
    switchBg: '#eaeef6',
    switchThumb: '#94a6be',
  },
}

const darkTheme = {
  name: 'dark',
  colors: {
    appBg: '#151419',
    surface: '#20202c',
    boardBg: '#1a1a24',
    textPrimary: '#ffffff',
    textSecondary: '#b5c1d4',
    primary: '#565eef',
    primaryHover: '#7b82ff',
    border: 'rgba(148, 166, 190, 0.5)',
    switchBg: '#0f0f14',
    switchThumb: '#565eef',
  },
}

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const value = useMemo(() => ({
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  }), [isDark])

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
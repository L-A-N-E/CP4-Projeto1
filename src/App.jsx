import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { ThemeProvider } from 'styled-components';
// Importando os temas
import { lightTheme, darkTheme } from './constant/Colors';
// Importando os componentes
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"

function App() {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Nav toggleTheme={toggleTheme}/>
      <Outlet />
      <Footer />
    </ThemeProvider>
    </>
  )
}
export default App

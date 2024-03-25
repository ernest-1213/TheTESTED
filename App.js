import React from 'react';
import Home from './Home';
import './App.css';
import { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';



export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>

        <Home />
          {/* <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

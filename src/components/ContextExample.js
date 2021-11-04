import React, { useContext } from 'react';

const ThemeContext = React.createContext("light");

export default function App() {
  const theme = { theme: "dark", color: "black", backgroundColor: "orange" };
  return (
    <ThemeContext.Provider value={ theme }>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <Button />
}

function Button() {
  const context = useContext(ThemeContext);
  return (
    <button style={{ color: context.color, backgroundColor: context.backgroundColor }} >
      { context.theme }
    </button> 
  )
}
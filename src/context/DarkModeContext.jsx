import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
   const [darkMode, setDarkMode] = useState(false);
   const toggleDarkMode = () => setDarkMode((modeState) => !modeState);
   return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
         {children}
      </DarkModeContext.Provider>
   );
}

import Header from "./Header";
import Todo from "./Todo";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false)
  
  const handleUpdateDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <div className={` transition-colors min-h-screen flex flex-col items-center justify-center w-full ${darkMode === true ? "bg-[#171721]" : "bg-slate-300"}`}>
      <Header handleUpdateVisionMode={handleUpdateDarkMode} darkMode={darkMode}/>
      <Todo darkMode={darkMode} />
    </div>
  );
}

export default App;

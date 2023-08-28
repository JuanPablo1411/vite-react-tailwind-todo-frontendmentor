import MoonIcon from "./icons/MoonIcon";
import { useEffect, useState } from "react";
import SunIcon from "./icons/SunIcon";

const Header = () => {

  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {

    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }


  }, [darkMode])
  
  // const handleClickToggleTheme = () => {

  // }

  return (
    <header className="container mx-auto px-4 pt-8 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
          TODO
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <SunIcon/> : <MoonIcon/>
          }
        </button>
      </div>
    </header>
  );
};

export default Header;

import sun from "../todo-app-main/images/icon-sun.svg"
import moon from "../todo-app-main/images/icon-moon.svg"

function Header({handleUpdateVisionMode, darkMode}) {
  return (
    <div className={` flex justify-center px-6 pt-8 h-[200px] sm:h-[300px] w-full ${darkMode === true ? "bg-[url(../todo-app-main/images/bg-mobile-dark.jpg)] sm:bg-[url(../todo-app-main/images/bg-desktop-dark.jpg)]" : "bg-[url(../todo-app-main/images/bg-mobile-light.jpg)] sm:bg-[url(../todo-app-main/images/bg-desktop-light.jpg)]"} bg-cover`} >
      
      <div className=" w-[375px] sm:w-[550px] flex justify-between">
        <div className=" text-white text-5xl tracking-widest uppercase">
          Todo
        </div>
        <div onClick={() => handleUpdateVisionMode()} className=" p-2 hover:cursor-pointer">
          <img src={darkMode === true ? sun : moon} alt="sun or moon" />
        </div>
      </div>
        
    </div>
  );
}

export default Header;

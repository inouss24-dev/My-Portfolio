import { LuAppWindow } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className=" flex justify-center md:justify-between items-center p-4 text-[#ffff] " id="navbar">
      <a href="#navbar" className=" flex items-center font-bold text-3xl md:text-xl">
        <LuAppWindow className="mr-2" />
        Inoussa
        <span className="text-[#efff16]">Dev</span>
      </a>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a 
            href="#home" 
            className="btn btn-sm hover:text-[#efff16] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
            Accueil
          </a>
          <a
            href="#A-propos"
            className="btn btn-sm btn-ghost hover:text-[#efff16] hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            A propos
          </a>
          <a href="#skills" className="btn btn-sm btn-ghost hover:text-[#efff16] hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Mes Compétences
          </a>
          <a href="#project" className="btn btn-sm btn-ghost hover:text-[#efff16] hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

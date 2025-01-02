import { IoMailUnreadSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Moi from "../../public/Moi.jpeg";

const Home = () => {
  return (
    <div
      className=" flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
      id="home"
    >
      <div className=" flex flex-col" id="A-propos">
        <h1 className=" text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0  text-[#ffff]">
          Bonjour,
          <br /> je suis <span className=" text-[#efff16]">InoussaDev</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left text-[#ffff]">
          je suis étudiant en développement web.
          <br />
          Contactez-moi si vous avez besoin de mes services.
        </p>
        <Link
          to="/contact"
          className="btn bg-[#efff16] text-[#000] md:w-fit hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-[#efff16] flex items-center gap-2"
        >
          <IoMailUnreadSharp className="w-5 h-5 text-[#000]" />
          Contactez-moi
        </Link>
      </div>
      <div className="md:ml-60">
        <img
          src={Moi}
          alt=""
          className="w-96 h-96 object-cover border-8 border-[#efff16] shadow-xl"
          style={{
            borderRadius: "32% 68% 48% 52% / 53% 29% 71% 47%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;

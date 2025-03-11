import { LuAppWindow } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer footer-center">
      <footer className="footer footer-center text-primary-content p-10">
        <aside>
          <a
            href="#navbar"
            className=" flex items-center font-bold text-3xl md:text-xl text-white"
          >
            <LuAppWindow className="mr-2" />
            Inoussa
            <span className="text-[#efff16]">Dev</span>
          </a>
          <div className=" flex items-center gap-5 my-5">
            <a href="https://github.com/inouss24-dev" target="_blank" rel="noopener noreferrer">
              <FiGithub
                size={25}
                className="hover:text-[#efff16] text-[#ffff]"
              />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100041204422074" target="_blank" rel="noopener noreferrer">
              {" "}
              <FaFacebook
                size={25}
                className="hover:text-[#efff16] text-[#ffff]"
              />
            </a>

            <a href="https://www.instagram.com/itz_inouss/" target="_blank" rel="noopener noreferrer">
              <FaInstagram
                size={25}
                className="hover:text-[#efff16] text-[#ffff]"
              />
            </a>

            <a href="https://www.tiktok.com/@_itz_inouss" target="_blank" rel="noopener noreferrer">
              <FaTiktok
                size={25}
                className="hover:text-[#efff16] text-[#ffff]"
              />
            </a>
          </div>
          <p className=" text-white text-md hover:text-[#efff16] transition-all ease-in-out duration-300">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

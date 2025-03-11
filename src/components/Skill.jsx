import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgANGULAR from "../assets/techno/Angular.png";
const  imgWORDPRESS = "https://ouch-cdn2.icons8.com/2zJeim6ImftWDi89JR97BqBuZomGxZwKZMf3a7tCG3s/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTcz/L2Y1MjViZTgyLTNj/ZGYtNGNhMS05OWI4/LThkMTU4MzY5NmYx/Yy5wbmc.png";
import { motion } from "framer-motion";


const skills = [
  {
    id: 1,
    name: "HTML",
    image: imgHTML,
  },
  {
    id: 2,
    name: "CSS",
    image: imgCSS,
  },
  {
    id: 3,
    name: "JavaScript",
    image: imgJS,
  },
  {
    id: 4,
    name: "Tailwind",
    image: imgTAILWIND,
  },
  {
    id: 5,
    name: "Node.js",
    image: imgNODE,
  },
  {
    id: 6,
    name: "React",
    image: imgREACT,
  },
  {
    id: 7,
    name: "Angular",
    image: imgANGULAR
  },
  {
    id: 8,
    name: "Wordpress",
    image: imgWORDPRESS
  }
];
const getSkillDescription = (name) => {
  const descriptions = {
    HTML: "HTML est utilisé pour structurer le contenu des pages web.",
    CSS: "CSS permet de styliser les pages web et de les rendre attractives.",
    JavaScript:
      "JavaScript ajoute de l'interactivité et de la logique aux sites web.",
    Tailwind: "Tailwind est un framework CSS utilitaire pour un design rapide.",
    "Node.js":
      "Node.js est une plateforme JavaScript côté serveur pour créer des applications backend.",
    React:
      "React est une bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques.",
    Angular: "Angular est un framework open-source de Google pour des applications web performantes et maintenables.",
    Wordpress: "WordPress est un CMS open-source, facile à utiliser et personnalisable, idéal pour créer des sites web, blogs et boutiques en ligne.",








  };
  return descriptions[name] || "Description non disponible.";
};

const Skill = () => {
  return (
    <div id="skills">
      <h1 className="uppercase font-bold mb-5 text-center text-3xl text-white hover:text-[#efff16]">
        Compétences
      </h1>
      <div className="flex flex-wrap gap-5 justify-center items-center md:w-full mt-4 md:mt-0">
        {skills.map((skill) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            key={skill.id}
            // initial={{ opacity: 0, scale: 0.8, translateY: 50 }}
            // whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            // transition={{ duration: 1, ease: "easeOut" }}
            className="group flex flex-col justify-center items-center bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-4 md:w-56 md:h-64"
          >
            <div className="w-24 h-24 p-2 rounded-full border-2 border-[#ffff]">
              <img
                src={skill.image}
                alt={skill.name}
                className="object-cover rounded-full h-full w-full"
              />
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-800 hover:text-[#000] hover:underline">
              {skill.name}
            </span>
            <div className="hidden md:flex flex-col justify-center items-center mt-4">
              <p className="text-center text-sm text-gray-600 group-hover:text-[#000] transition-all duration-300">
                {getSkillDescription(skill.name)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

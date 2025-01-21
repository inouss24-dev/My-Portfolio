import Quiz from "../../public/Quiz App.png";
import TodoList from "../../public/Todo List.png";
import WeatherApp from "../../public/Weather App.png";
import KicksCoin from "../../public/Kicks Coin.png";
import MyPortfolio from "../../public/Portfolio.png";
import Calculator from "../../public/Calculator-react.png";
import LandingPage from "../../public/Landing Page.mp4";
import DictionnaryApp from "../../public/Dictionnary App.png";
import { FaPlay } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import Footer from "../components/Footer";

const AllProject = () => {
  const project = [
    {
      id: 1,
      title: "Quiz App",
      description:
        "Une Application de Quiz qui sert a tester ses connainces sur plusieurs themes.",
      image: Quiz,
      demo: "https://inouss-dev-quiz-app.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/Quiz-App",
      technologies: ["Html", "Css", "JavaScript"],
      type: "image",
    },
    {
      id: 2,
      title: "Todo List",
      description:
        "Une Application Web qui permet de géger ses taches quotidiennes.",
      image: TodoList,
      demo: "https://react-todo-list-plum-one.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/react-todo-list",
      technologies: ["React", "Tailwind"],
      type: "image",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "Une Application de metéo qui permet de voir la metéo en temps réel.",
      image: WeatherApp,
      demo: "https://inouss-dev-weather-app.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/Weather-App",
      technologies: ["React", "Tailwind"],
      type: "image",
    },
    {
      id: 4,
      title: "My Portfolio",
      description: "Mon Portfolio un espace qui fait ma biographie",
      image: MyPortfolio,
      demo: "#navbar",
      gitHub: "#",
      technologies: ["React", "Tailwind"],
      type: "image",
    },
    {
      id: 5,
      title: "Great Calculator",
      description: "Plonnger dans le monde du calcul avec cette outils",
      image: Calculator,
      demo: "https://calculator-react-theta-one.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/calculator-react",
      technologies: ["React", "Tailwind"],
      type: "image",
    },
    {
      id: 6,
      title: "Kicks Coin",
      description:
        "Une application qui permet de rechercher une cryptomonnaie et d'afficher son rang, son prix actuel et d'autres informations clés.",
      image: KicksCoin,
      demo: "https://kicks-coin.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/kicks-coin",
      technologies: ["React", "Tailwind"],
      type: "image",
    },
    {
      id: 7,
      title: "My Dictionnary App",
      description: "Une application qui permet de rechercher une Un mot clés.",
      image: DictionnaryApp,
      demo: "https://my-dictionary-app-nine.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/My-Dictionary-App",
      technologies: ["React", "Tailwind"],
      type: "image",
    },
    {
      id: 8,
      title: "Landing Page",
      description:
        "Une Landing Page Normal Pour la presentation d'une StartUp.",
      image: LandingPage,
      demo: "https://landing-page-1-9w45z6r9a-inouss24-devs-projects.vercel.app/",
      gitHub: "https://github.com/inouss24-dev/Landing-Page-1",
      technologies: ["React", "Tailwind"],
      type: "video",
    },
  ];
  return (
    <>
      <div className="p-5 md:px-[15%]">
        <div className="flex justify-center items-center md:justify-start space-x-1">
          <GoProjectRoadmap className="font-extrabold text-3xl  text-white" />
          <h1 className="font-extrabold text-3xl text-white">
            Tous Mes Projets
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {project.map((projects) => (
            <div
              key={projects.id}
              className="bg-base-300 p-5 h-fit rounded-xl shadow-lg "
            >
              {projects.type === "video" ? (
                <video
                  src={projects.image}
                  controls
                  muted
                  className="w-full rounded-xl h-full object-cover hover:scale-105 transition-all duration-300"
                />
              ) : (
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full rounded-xl h-full object-cover hover:scale-105 transition-all duration-300"
                />
              )}
              <div>
                <h1 className="my-2 font-bold text-[#efff16] text-2xl">
                  {projects.title}
                </h1>
                <p className="text-base text-white">{projects.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 my-3">
                {projects.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge bg-[#efff16] badge-sm text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-x-3 items-center">
                <a
                  href={projects.demo}
                  className="btn bg-[#efff16] text-black hover:scale-105 transition-all hover:bg-[#efff16] duration-300 w-2/3"
                >
                  <FaPlay className="w-4 h-4" />
                  Test
                </a>
                <a
                  href={projects.gitHub}
                  className="btn btn-neutral text-[#fff] hover:scale-105 transition-all duration-300 w-1/3"
                >
                  <AiFillGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AllProject;

import Quiz from "../../public/Quiz App.png";
import TodoList from "../../public/Todo List.png";
import WeatherApp from "../../public/Weather App.png";
import MyPortfolio from "../../public/Portfolio.png";
import Calculator from "../../public/Calculator-react.png";
import KicksCoin from "../../public/Kicks Coin.png";
import { FaPlay } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

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
  },
  {
    id: 4,
    title: "My Portfolio",
    description: "Mon Portfolio un espace qui fait ma biographie",
    image: MyPortfolio,
    demo: "#navbar",
    gitHub: "#",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 5,
    title: "Great Calculator",
    description: "Plonnger dans le monde du calcul avec cette outils",
    image: Calculator,
    demo: "https://calculator-react-theta-one.vercel.app/",
    gitHub: "https://github.com/inouss24-dev/calculator-react",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 6,
    title: "Kicks Coin",
    description: "Une application qui permet de rechercher une cryptomonnaie et d'afficher son rang, son prix actuel et d'autres informations clés.",
    image: KicksCoin,
    demo: "https://kicks-coin.vercel.app/",
    gitHub: "https://github.com/inouss24-dev/kicks-coin",
    technologies: ["React", "Tailwind"],
  },
];

const Project = () => {
  return (
    <div className="mt-10 ">
      <h1
        className="uppercase font-bold mb-5 text-center text-3xl text-white hover:text-[#efff16]"
        id="project"
      >
        Mes Projets
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        {project.map((projects) => (
          <div
            key={projects.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg "
          >
            <img
              src={projects.image}
              alt={projects.title}
              className=" w-full rounded-xl h-full object-cover hover:scale-105 transition-all duration-300"
            />
            <div>
              <h1 className="my-2 font-bold text-[#efff16] text-2xl te">
                {projects.title}
              </h1>
              <p className="text-base  text-white">{projects.description}</p>
            </div>
            <div className=" flex flex-wrap gap-2 my-3">
              {projects.technologies.map((tech) => (
                <span
                  key={tech}
                  className="badge bg-[#efff16] badge-sm text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className=" flex gap-x-3 items-center">
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
  );
};

export default Project;

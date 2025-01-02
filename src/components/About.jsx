import Moi from "../../public/Moi.jpeg";

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32">
      <h1 className="uppercase font-bold mb-4 text-center text-3xl text-white hover:text-[#efff16]">
        À propos
      </h1>
      <div className="flex flex-col md:flex-row md:h-screen justify-center items-center">
        <div className="hidden md:block md:w-1/3">
          <img
            src={Moi}
            alt="Portrait"
            className="w-96 object-cover rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="md:ml-4 md:w-2/3 space-y-4 text-white">
          <p className="text-2xl md:text-3xl">
            Étudiant en développement web, je suis passionné, curieux et motivé
            par l’apprentissage. J’aime explorer les nouvelles technologies et
            relever des défis qui stimulent ma créativité et ma rigueur. À
            travers mes projets personnels, j’ai cultivé mon sens du détail et
            mon goût pour l’innovation. Je cherche à contribuer à des projets
            inspirants tout en progressant dans le domaine du web.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;

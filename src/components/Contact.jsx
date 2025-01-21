
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <div>
        <div className="p-5 md:px-[15%]">
          <div className="flex flex-col items-center gap-y-4 md:items-start">
            <div>
              <h1 className=" text-4xl font-bold text-[#ffff] hover:text-[#efff16] hover:scale-105 duration-300 transition-all">Me contacter</h1>
            </div>
            <div>
              <input
                type="text"
                placeholder="Entrer votre nom..."
                className="input input-bordered  w-96"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Entrer votre prenom..."
                className="input input-bordered  w-96"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Entrer votre email"
                className="input input-bordered w-96"
              />
            </div>
            <div>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-96"
              ></textarea>
            </div>
            <div>
              <select className="select select-bordered  w-96">
                <option disabled selected>
                  Quel services voulez vous ?
                </option>
                <option>Création d'un projet</option>
                <option>M'embaucher </option>
                <option>Faire un partenariat</option>
              </select>
            </div>
            <button className="btn bg-[#efff16] hover:bg-[#efff16] text-[#000] w-52 md:w-32 hover:scale-105 transition-all duration-300">
                Envoyer
            </button>
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
};

export default Contact;

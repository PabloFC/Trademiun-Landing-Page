import movil_hero from "../assets/img/landing/movil_hero.png";
import AppleButton from "./AppleButton";
import GoogleButton from "./GoogleButton";
const Header = () => {
  return (
    <section className="bg-white h-2/4">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-16 lg:grid-cols-12">
        <div className=" place-self-center lg:col-span-7">
          <div className="max-w-2xl mb-8">
            <h1 className="  text-4xl font-extrabold xl:tracking-wider leading-none md:text-5xl xl:text-6xl mb-4 text-start">
              Trading real para <br />
              <span className="text-secundario font-raleway">
                Traders reales.
              </span>
            </h1>
            <p className="max-w-xl mb-6 text-primario px-1 lg:px-0 lg:mb-8 md:text-lg lg:text-xl text-start">
              Únete a los mejores canales de señales y cursos de la comunidad
              con total transparencia y tranquilidad.
            </p>
          </div>

          <div className="flex flex-row justify-start mx-auto gap-4 ">
            <AppleButton />
            <GoogleButton />
          </div>
        </div>
        <div className="hidden justify-self-center lg:col-span-5 lg:flex justify-end h-auto ">
          <img className="mt-16" src={movil_hero} alt="foto_movilApp" />
        </div>
      </div>
    </section>
  );
};

export default Header;

import AppleButton from "./AppleButton";
import GoogleButton from "./GoogleButton";

const Lema = () => {
  return (
    <section className="py-12">
      <div className="w-full max-w-2xl mx-auto border-solid border-black border-2 rounded-xl p-2 ">
        <h2 className="text-3xl xl:text-6xl font-bold mb-2 text-center  mt-4 lg:py-8 ">
          ¿Quieres ser uno de nuestros{" "}
          <span className="text-secundario">traders?</span>
        </h2>
        <p className="text-start text-lg font-bold mb-6 px-5 xl:px-24 ">
          Si quieres ser uno de nuestros traders solo debes registrarte y
          comenzar a mandar señales para empezar a crear tu Trackrecord.
        </p>
        <div className="flex flex-row justify-center gap-2 mb-4 md:gap-12 ">
          <AppleButton />
          <GoogleButton />
        </div>
      </div>
    </section>
  );
};

export default Lema;

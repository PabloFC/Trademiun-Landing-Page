import trader from "../assets/img/landing/trader.jpg";
import teleoperador from "../assets/img/landing/teleoperador.jpg";
import ayuda from "../assets/img/landing/ayuda.jpg";
const ImgSection = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col sm:flex-row lg:mb-0">
        <div className="w-full flex justify-center rounded-lg basis-2/4 max-h-96 ">
          <img className="object-cover" src={trader} alt="img_trader" />
        </div>
        <div className="w-full basis-2/4 xl:px-12 lg:p-6  bg-gray-100 ">
          <h2 className="text-2xl mb-4 px-2 font-bold mt-2 xl:p-2 ">
            Descubre cómo un Trader Profesional Puede Potenciar tus Inversiones
          </h2>
          <p className="px-2 xl:p-2">
            Nuestros traders están capacitados para analizar los mercados en
            tiempo real,
            <span className="font-bold">
              identificar oportunidades de inversión
            </span>{" "}
            y ejecutar estrategias efectivas que maximicen tus rendimientos. Ya
            sea que estés interesado en el mercado de valores, divisas, materias
            primas o criptomonedas
          </p>
          <button className="bg-secundario hover:bg-primario px-6 py-2 text-white mt-4 rounded-3xl mb-3 lg:mb-0">
            Buscar Trader
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  ">
        <div
          className="w-full basis-2/4 xl:px-12 lg:p-6 order-2 md:order-1 bg-gray-100 "
          id="contacto"
        >
          <h2 className="text-2xl mb-4 px-2 font-bold mt-2 xl:p-2">
            Servicio 24 Horas
          </h2>
          <p className="xl:p-2 px-2">
            Con nuestro servicio disponible las{" "}
            <span className="font-bold">24 horas, los 7 días de la semana</span>{" "}
            , puedes tener la tranquilidad de saber que estamos aquí para
            resolver tus dudas, atender tus necesidades y solucionar cualquier
            problema que puedas tener, en cualquier momento del día o la noche.
            Ya sea que necesites asistencia técnica, atención al cliente o
            cualquier otro tipo de ayuda.
          </p>
          <button className="bg-secundario hover:bg-primario px-6 py-2 text-white mt-4 rounded-3xl mb-3 lg:mb-0 ">
            Contactar
          </button>
        </div>
        <div className="w-full flex justify-center rounded-lg basis-2/4 order-1 md:order-2 max-h-96 ">
          <img
            className="object-cover"
            src={teleoperador}
            alt="teleoperador foto"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row lg:mb-0" id="trader">
        <div className="w-full flex justify-center rounded-lg basis-2/4 max-h-96 ">
          <img className="object-cover" src={ayuda} alt="img_trader" />
        </div>
        <div className="w-full basis-2/4 xl:px-12 lg:p-6  bg-gray-100 ">
          <h2 className="text-2xl mb-4 px-2 font-bold mt-2 xl:p-2 ">
            Descubre cómo te podemos ayudar
          </h2>
          <p className="px-2 xl:p-2">
            Nuestra <span className="font-bold">misión</span> es proporcionar a
            cada uno de nuestros clientes la plataforma y los conocimientos
            necesarios para prosperar en el mundo del trading. Ya sea que esté
            comenzando su viaje en el mercado financiero o sea un operador
            experimentado, en <span className="font-bold">Trademium </span>{" "}
            encontrará la asistencia personalizada que necesita para alcanzar
            sus metas.
          </p>
          <button className="bg-secundario hover:bg-primario px-6 py-2 text-white mt-4 rounded-3xl mb-3 lg:mb-0">
            Asesorar
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImgSection;

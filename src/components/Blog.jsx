// import grafica from "../assets/img/landing/grafica.png";
import oro from "../assets/img/landing/oro.jpg";
import apple from "../assets/img/landing/apple.jpg";
import petroleo from "../assets/img/landing/petroleo.jpg";

const Blog = () => {
  return (
    <section className="py-4" id="blog">
      <h2 className="text-center text-3xl font-bold mb-20">
        Últimos artículos
      </h2>
      <div className="flex flex-col sm:flex-row mx-auto justify-center">
        <div className="w-full mb-4 basis-1/2 border-2 border-solid rounded-xl">
          <div>
            <img src={oro} className="w-full " alt="grafica" />
          </div>
          <div className="mb-2 p-8">
            <h3 className="text-primario text-2xl font-bold mt-4 mb-4">
              El precio del Oro apunta a máximos históricos
            </h3>
            <p className="text-xl">
              El precio del Oro se disparó durante la sesión norteamericana
              previa al fin de semana, ya que el par XAU/USD cotizó por encima
              de 2.400$, registrando ganancias de más del 1.5% en medio de la
              subida de los rendimientos de los bonos del Tesoro estadounidense.
              El metal sin rendimiento amplió su avance y amenazó con romper el
              máximo histórico de 2.431$...
            </p>
          </div>
          <div className="flex justify-end mr-4 py-4">
            <a href="https://www.fxstreet.es/news/el-precio-del-oro-supera-el-nivel-2400-apunta-a-maximos-historicos-202405172003">
              <button className="bg-secundario px-6 py-2 text-white mt-2 rounded-3xl ">
                Leer más
              </button>
            </a>
          </div>
        </div>

        <div className="w-full basis-1/2 xl:ml-8 ">
          <div className="mb-5 w-full basis-1/2  border-2 border-solid rounded-xl">
            <div className="mb-3">
              <img
                src={apple}
                className="w-full xl:h-[200px]  "
                alt="grafica"
              />
            </div>
            <div className="p-5">
              <h3 className="text-primario text-2xl xl:text-xl font-bold mb-2">
                Apple nombrada la mejor empresa estadounidense en 2024
              </h3>
              <p className="text-xl xxl:pr-16 xl:text-lg md:pr-0">
                Apple ha sido nombrada la mejor empresa estadounidense en 2024
                por su innovación continua, fuerte desempeño financiero y
                liderazgo en sostenibilidad...
              </p>
              <div className="flex justify-end text-secundario text-md hover:cursor-pointer mr-4">
                <p className="mr-12 lg:mr-0 mt-1">Leer más</p>
              </div>
            </div>
          </div>

          <div className="mb-5 w-full basis-1/2  border-2 border-solid rounded-xl">
            <div className="mb-3">
              <img
                src={petroleo}
                className="w-full xl:h-[200px]"
                alt="grafica"
              />
            </div>
            <div className="p-5">
              <h3 className="text-primario text-2xl xl:text-xl font-bold mb-2">
                El precio del petróleo sube por tensiones en Medio Oriente
              </h3>
              <p className="text-xl xl:text-lg xxl:pr-16 md:pr-0">
                El precio del petróleo crudo subió un 5% hoy debido a las
                crecientes tensiones geopolíticas en Medio Oriente, que han
                afectado la oferta mundial...
              </p>
              <div className="flex justify-end text-secundario text-md hover:cursor-pointer mr-4">
                <p className="mr-12 lg:mr-0 mt-1">Leer más</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

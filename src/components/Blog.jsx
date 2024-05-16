// import grafica from "../assets/img/landing/grafica.png";
import imgBlogGrande from "../assets/img/landing/imgBlogGrande.png";
import imgBlogPeq from "../assets/img/landing/imgBlogPeq.png";

const Blog = () => {
  return (
    <section className="py-4">
      <h2 className="text-center text-3xl font-bold mb-20">
        Últimos artículos
      </h2>
      <div className=" flex flex-col sm:flex-row mx-auto justify-center">
        <div className="w-full mb-4 basis-1/2 border-2 border-solid rounded-xl">
          <div>
            <img src={imgBlogGrande} className="w-full " alt="grafica" />
          </div>
          <div className="mb-2 p-8">
            <h3 className="text-primario text-2xl font-bold mt-4 mb-4">
              Cursos de Inversión
            </h3>
            <p className="text-xl">
              Imperia secures €3M funding led by Samaipata for its innovative
              SaaS supply chain solution. Backed by top investors, Imperiaaims
              for Spanish market consolidation and international expansion....
            </p>
          </div>
          <div className="flex justify-end mr-4 py-4">
            <button className="bg-secundario px-6 py-2 text-white mt-4 rounded-3xl ">
              Leer más
            </button>
          </div>
        </div>

        <div className="w-full basis-1/2 xl:ml-8 ">
          <div className="mb-5 w-full basis-1/2 xl:py-4 border-2 border-solid rounded-xl">
            <div className="mb-3">
              <img src={imgBlogPeq} className="w-full" alt="grafica" />
            </div>
            <div className="p-5">
              <h3 className="text-primario text-2xl font-bold mb-2">
                Cursos de Inversión
              </h3>
              <p className="text-xl xxl:pr-16 md:pr-0">
                Imperia secures €3M funding led by Samaipata for its innovative
                SaaS supply chain solution...
              </p>
              <div className="flex justify-end text-secundario text-md hover:cursor-pointer mr-4">
                <p className="mr-12 lg:mr-0 mt-1">Leer más</p>
              </div>
            </div>
          </div>

          <div className="mb-5 w-full basis-1/2 xl:py-4 border-2 border-solid rounded-xl">
            <div className="mb-3">
              <img src={imgBlogPeq} className="w-full" alt="grafica" />
            </div>
            <div className="p-5">
              <h3 className="text-primario text-2xl font-bold mb-2">
                Cursos de Inversión
              </h3>
              <p className="text-xl xxl:pr-16 md:pr-0">
                Imperia secures €3M funding led by Samaipata for its innovative
                SaaS supply chain solution...
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

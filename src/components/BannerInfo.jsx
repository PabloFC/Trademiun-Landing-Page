const BannerInfo = () => {
  return (
    <section>
      <div className="mx-auto w-full bg-primario py-12 flex flex-col sm:flex-row gap-2 ">
        <div className="basis-1/4">
          <h2 className="text-3xl text-center text-secundario font-bold ">
            +120K
          </h2>
          <h5 className="text-center text-white px-8">
            Usuarios activos mensualmente
          </h5>
        </div>
        <div className="basis-1/4">
          <h2 className="text-3xl text-center text-secundario font-bold ">
            +300
          </h2>
          <h5 className="text-center text-white px-8">
            Canales de señales y traders
          </h5>
        </div>
        <div className="basis-1/4">
          <h2 className="text-3xl text-center text-secundario font-bold ">
            +25K
          </h2>
          <h5 className="text-center text-white px-8">
            Señales han sido enviadas hasta el momento
          </h5>
        </div>
        <div className="basis-1/4">
          <h2 className="text-3xl text-center text-secundario font-bold ">
            +40
          </h2>
          <h5 className="text-center text-white px-8">
            Cursos disponibles y filtrados minuciosamente
          </h5>
        </div>
      </div>
    </section>
  );
};

export default BannerInfo;

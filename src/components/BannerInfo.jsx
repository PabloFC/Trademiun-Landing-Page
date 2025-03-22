const BannerInfo = () => {
  const stats = [
    { value: "+120K", description: "Usuarios activos mensualmente" },
    { value: "+300", description: "Canales de señales y traders" },
    {
      value: "+25K",
      description: "Señales han sido enviadas hasta el momento",
    },
    {
      value: "+40",
      description: "Cursos disponibles y filtrados minuciosamente",
    },
  ];

  return (
    <section>
      <div className="mx-auto w-full bg-primario py-12 flex flex-col sm:flex-row gap-2 ">
        {stats.map((stat) => (
          <div key={stat.value} className="basis-1/4">
            <h2 className="text-3xl text-center text-secundario font-bold">
              {stat.value}
            </h2>
            <h5 className="text-center text-white px-8">{stat.description}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannerInfo;

const CardWhyTrademiun = () => {
  return (
    <section className="py-12">
      <div className="flex flex-col sm:flex-row gap-12 mx-auto justify-between">
        <div className="bg-primario border-solid border-2 rounded-xl w-full max-w-96 basis-1/3 p-4">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#39BFF0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-analytics"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
                <path d="M9 12v-4" />
                <path d="M12 12v-1" />
                <path d="M15 12v-2" />
                <path d="M12 12v-1" />
              </svg>
            </div>

            <h6 className="max-w-2xl mb-4 text-xl text-white text-center font-bold">
              Potente y fiable
            </h6>
          </div>
          <p className="text-white text-center">
            Herramientas que se adaptan a todo tipo de trading, tanto a largo
            plazo como para day trading, tanto para inversores principiantes
            como experimentados.
          </p>
        </div>

        <div className="bg-primario border-solid border-2 rounded-xl w-full max-w-96 basis-1/3 p-4">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#39BFF0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
              </svg>
            </div>

            <h6 className="max-w-2xl mb-4 text-xl text-white text-center font-bold">
              Fácil de usar
            </h6>
          </div>
          <p className="text-white text-center">
            Plataformas tan intuitivas que podrá manejarlas en pocos minutos,
            sin necesidad de formación.
          </p>
        </div>

        <div className="bg-primario border-solid border-2 rounded-xl w-full max-w-96 basis-1/3 p-4">
          <div className="w-full flex flex-col gap-2">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#39BFF0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-headphones"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
                <path d="M15 13m0 2a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2z" />
                <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
              </svg>
            </div>

            <h6 className="max-w-2xl mb-4 text-xl text-white text-center font-bold">
              Servicio de atención eficiente
            </h6>
          </div>
          <p className="text-white text-center">
            Gestores cualificados y reactivos le ayudarán por correo
            electrónico, teléfono y en directo a través de herramientas de
            conectividad remota.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardWhyTrademiun;

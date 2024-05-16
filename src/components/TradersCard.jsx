const TradersCard = ({ porcentaje, nombre, foto }) => {
  return (
    <section className="py-12">
      <div className="w-52 h-28 border-2 border-solid bg-primario border-black rounded-xl p-2 ">
        <div className="flex items-baseline mb-1">
          <h4 className="mr-1 text-white font-bold">{porcentaje} %</h4>
          <svg
            viewBox="0 0 256 222"
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path fill="#39BFF0" d="m128 0 128 221.705H0z" />
          </svg>
        </div>
        <div className="mb-2">
          <h6 className="text-white">En los ultimos 6 meses</h6>
        </div>
        <div>
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-transparent"
            src={foto}
            alt="avatar"
          />
          <p className="inline-block ml-3 text-white font-bold">{nombre}</p>
        </div>
      </div>
    </section>
  );
};

export default TradersCard;

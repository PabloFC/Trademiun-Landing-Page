import Nav from "../components/Nav";
import Header from "../components/Header";
import BannerInfo from "../components/BannerInfo";
import ImgSection from "../components/ImgSection";
import Lema from "../components/Lema";
import Accordeon from "../components/Accordeon";
import TradersCard from "../components/TradersCard";
import FooterTrademiun from "../components/FooterTrademiun";
import Blog from "../components/Blog";
import CardWhyTrademiun from "../components/CardWhyTrademiun";
import vero from "../assets/img/landing/vero.jfif";
import marco from "../assets/img/landing/marco.jfif";
import nacho from "../assets/img/landing/nacho.jfif";
import separador from "../assets/img/landing/separador.png";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="mb-20">
        <Header />
      </div>
      <div className="mb-20">
        <BannerInfo />
      </div>

      <div>
        <h2
          className="xl:flex justify-center text-center text-4xl font-bold mb-20"
          id="sobreNosotros"
        >
          Sobre Nosotros
        </h2>
      </div>

      <div className="container mx-auto mb-20">
        <ImgSection />
      </div>

      <div className="flex justify-center text-center text-4xl font-bold mb-20 ">
        <img className="w-1/2 xl:w-1/3" src={separador} alt="separador" />
      </div>

      <div className="container mx-auto mb-20">
        <Lema />
      </div>

      <div>
        <h2 className="hidden xl:flex justify-center text-3xl font-bold mb-20">
          Top traders
        </h2>
      </div>

      <div className="hidden lg:flex cards mb-20 ">
        <div className="cards-slide gap-8 ">
          <TradersCard porcentaje="225" nombre="Nacho" foto={nacho} />
          <TradersCard
            porcentaje="133"
            nombre="Izabela"
            foto="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <TradersCard
            porcentaje="111"
            nombre="Alvaro"
            foto="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          />
          <TradersCard porcentaje="80" nombre="Marco" foto={marco} />
          <TradersCard porcentaje="87" nombre="Vero" foto={vero} />
        </div>

        <div className="cards-slide ml-8 gap-8">
          <TradersCard porcentaje="225" nombre="Nacho" foto={nacho} />
          <TradersCard
            porcentaje="133"
            nombre="Izabela"
            foto="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
          <TradersCard
            porcentaje="127"
            nombre="Alvaro"
            foto="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          />
          <TradersCard porcentaje="80" nombre="Marco" foto={marco} />
          <TradersCard porcentaje="87" nombre="Vero" foto={vero} />
        </div>
      </div>
      <div className="container mx-auto mb-20">
        <Blog />
      </div>

      <div>
        <h2 className="xl:flex justify-center text-center text-3xl font-bold mb-20 ">
          ¿Por qué elegir Trademiun?
        </h2>
      </div>

      <div className="container mx-auto flex justify-center mb-20">
        <CardWhyTrademiun />
      </div>

      <div className="container xl:w-1/2 mx-auto mb-20">
        <Accordeon />
      </div>

      <FooterTrademiun />
    </>
  );
};

export default Home;

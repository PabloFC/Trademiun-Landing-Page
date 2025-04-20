import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
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
  const users = [
    {
      porcentaje: "225",
      nombre: "Nacho",
      foto: nacho,
    },
    {
      porcentaje: "133",
      nombre: "Izabela",
      foto: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      porcentaje: "111",
      nombre: "Alvaro",
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    },
    { porcentaje: "80", nombre: "Marco", foto: marco },
    { porcentaje: "87", nombre: "Vero", foto: vero },
  ];
  return (
    <>
      <Nav />
      <main>
        <section id="hero" className="mb-20">
          <HeroSection />
        </section>
        <section id="banner" className="mb-20">
          <BannerInfo />
        </section>

        <section id="sobreNosotros" className="mb-20">
          <h2 className="xl:flex justify-center text-center text-4xl font-bold mb-20">
            Sobre Nosotros
          </h2>
          <div className="container mx-auto">
            <ImgSection />
          </div>
        </section>

        <section
          id="separador"
          className="flex justify-center text-center text-4xl font-bold mb-20 "
        >
          <img className="w-1/2 xl:w-1/3" src={separador} alt="separador" />
        </section>

        <section id="lema" className="container mx-auto mb-20">
          <Lema />
        </section>

        <section id="topTraders">
          <div>
            <h2 className="hidden xl:flex justify-center text-3xl font-bold mb-20">
              Top traders
            </h2>
          </div>

          <div className="hidden lg:flex cards mb-20 ">
            <div className="cards-slide gap-8 ">
              {users.map((user) => (
                <TradersCard
                  key={user.nombre}
                  porcentaje={user.porcentaje}
                  nombre={user.nombre}
                  foto={user.foto}
                />
              ))}
            </div>

            <div className="cards-slide ml-8 gap-8">
              {users.map((user) => (
                <TradersCard
                  key={user.nombre}
                  porcentaje={user.porcentaje}
                  nombre={user.nombre}
                  foto={user.foto}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="container mx-auto mb-20">
          <Blog />
        </section>

        <section id="CardWhyTrademiun">
          <div>
            <h2 className="xl:flex justify-center text-center text-3xl font-bold mb-20 ">
              ¿Por qué elegir Trademiun?
            </h2>
          </div>

          <div className="container mx-auto flex justify-center mb-20">
            <CardWhyTrademiun />
          </div>
        </section>

        <section id="Accordeon" className="container xl:w-1/2 mx-auto mb-20">
          <Accordeon />
        </section>
      </main>
      <FooterTrademiun />
    </>
  );
};

export default Home;

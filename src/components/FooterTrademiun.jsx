import { Footer } from "flowbite-react";
import logo_blanco from "../assets/img/landing/logo_blanco.png";
const FooterTrademiun = () => {
  return (
    <Footer container className="bg-primario">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-around">
          <Footer.Brand
            className="flex items-center justify-center lg:w-32"
            href="#"
            src={logo_blanco}
            alt="Trademiun Logo"
          />
          <Footer.LinkGroup className="flex justify-center">
            <Footer.Link className="text-white" href="#">
              Términos & condiciones
            </Footer.Link>
            <Footer.Link className="text-white" href="#">
              Privacidad
            </Footer.Link>
            <Footer.Link className="text-white" href="#">
              Política de cookies
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          className="text-white"
          href="#"
          by="Trademiun™"
          year={2024}
        />
      </div>
    </Footer>
  );
};

export default FooterTrademiun;

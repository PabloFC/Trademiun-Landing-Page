import { Button, Navbar } from "flowbite-react";
import logo from "../assets/img/landing/logo.png";

const Nav = () => {
  return (
    <Navbar fluid rounded className="bg-gray-200 xl:sticky xl:top-0">
      <Navbar.Brand className="lg:ml-4 xl:ml-40 w-32">
        <img src={logo} alt="Logo Trademiun" />
      </Navbar.Brand>
      <div className="flex md:order-2 xl:mr-40 ">
        <Button color="gray" className="!text-primario hidden xl:flex lg:mr-2">
          Login
        </Button>
        <Button className="bg-primario hover:!bg-secundario mr-2">
          Regístrate
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="#"
          className="hover:!text-secundario text-stone-950 text-md font-bold"
        >
          Blog
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="hover:!text-secundario text-stone-950 text-md font-bold"
        >
          Sobre Nosotros
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="hover:!text-secundario text-stone-950 text-md font-bold"
        >
          Contacto
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="hover:!text-secundario text-stone-950 text-md font-bold"
        >
          Conviertete en trader
        </Navbar.Link>
        <Navbar.Link
          href="#"
          className="hover:!text-secundario text-stone-950 text-md font-bold"
        >
          FAQS
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

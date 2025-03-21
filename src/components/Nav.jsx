import { Button, Navbar } from "flowbite-react";
import logo from "../assets/img/landing/logo.png";

const Nav = () => {
  const links = [
    { href: "#sobreNosotros", label: "Sobre Nosotros" },
    { href: "#blog", label: "Blog" },
    { href: "#faqs", label: "FAQS" },
  ];

  return (
    <Navbar fluid rounded className="bg-gray-200 xl:sticky xl:top-0">
      <Navbar.Brand className="lg:ml-4 xl:ml-40 w-32">
        <img src={logo} alt="Logo Trademiun" />
      </Navbar.Brand>
      <div className="flex md:order-2 xl:mr-40 ">
        <Button
          color="gray"
          className="!text-primario hidden xl:flex lg:mr-2 !ring-0"
        >
          Login
        </Button>
        <Button className="bg-primario hover:!bg-secundario mr-2 !ring-0">
          Regístrate
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map((link) => (
          <Navbar.Link
            key={link.href}
            href={link.href}
            className="hover:!text-secundario text-stone-950 text-md font-bold"
          >
            {link.label}
          </Navbar.Link>
        ))}

        <Navbar.Link
          href="#faqs"
          className="hover:!text-secundario text-stone-950 text-md font-bold xl:hidden"
        >
          Login
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

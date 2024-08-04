import { useContext } from "react";
import * as s from "./NavbarStyles.js";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { Context } from "../../Context/Context.jsx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { menu, handleMenu } = useContext(Context);

  return (
    <s.HeaderContainer>
      <s.Logo
        src="/src/Image/_08c234a2-cf3d-427b-8f8e-4fdde03596bb.jpg"
        alt="Logo"
      />
      <s.DeployMenu>
        <FaBars size={32} onClick={handleMenu} />
      </s.DeployMenu>
      <s.LinksContainer isOpen={menu}>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/products">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/about">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </s.LinksContainer>
      <FaCartShopping size={32} />
    </s.HeaderContainer>
  );
};

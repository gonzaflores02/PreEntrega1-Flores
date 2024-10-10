import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <header>
      <img
        src="https://res.cloudinary.com/dgjy86aon/image/upload/v1728572831/logo_xdetwb.svg"
        alt="Logo de G-Tech"
        className="logo"
      />

      <nav>
        <ul className="nav-links">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Teclados</a>
          </li>
          <li>
            <a href="">Mouses Gamer</a>
          </li>
          <li>
            <a href="">Auriculares Gamer</a>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

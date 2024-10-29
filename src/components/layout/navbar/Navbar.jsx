import { CartWidget } from "../../common/CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dgjy86aon/image/upload/v1728572831/logo_xdetwb.svg"
          alt="Logo de G-Tech"
          className="logo"
        />
      </Link>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/categoria/teclados">Teclados</Link>
          </li>
          <li>
            <Link to="/categoria/mouses">Mouses Gamer</Link>
          </li>
          <li>
            <Link to="/categoria/headsets">Auriculares Gamer</Link>
          </li>
        </ul>
      </nav>

      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

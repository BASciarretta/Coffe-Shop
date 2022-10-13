import SearchBar from "./SearchBar";
import ButtonSearchBar from "./ButtonSearchBar";
import GPS from "./GPS";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to="/">
          <div className="navbar-brand">
            <img
              src="img/establecimiento-de-cafe.png"
              className="logo"
              alt="Logo Establecimiento de café"
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="cafe" className="text-decoration-none">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  CAFÉ
                </div>
              </li>
            </Link>
            <Link to="productos" className="text-decoration-none">
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  href="productos"
                >
                  PRODUCTOS
                </div>
              </li>
            </Link>
            <Link to="quienes-somos" className="text-decoration-none">
              {" "}
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  href="quienes_somos"
                >
                  QUIÉNES SOMOS
                </div>
              </li>
            </Link>
            <Link to="contacto" className="text-decoration-none">
              <li className="nav-item">
                <div
                  className="nav-link active"
                  aria-current="page"
                  href="contacto"
                >
                  CONTACTO
                </div>
              </li>
            </Link>
          </ul>
          <div className="d-flex">
            <SearchBar />
            <ButtonSearchBar />
            <GPS />
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

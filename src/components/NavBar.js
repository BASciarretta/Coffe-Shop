import SearchBar from "./SearchBar";
import ButtonSearchBar from "./ButtonSearchBar";
import GPS from "./GPS";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container" href="index.html">
          <a className="navbar-brand">
            <img
              src="imagenes/establecimiento de cafe.png"
              className="logo"
              alt="Logo Establecimiento de café"
            />
          </a>
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
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="cafe.html"
                >
                  CAFÉ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="productos.html"
                >
                  PRODUCTOS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="quienes_somos.html"
                >
                  QUIÉNES SOMOS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contacto.html"
                >
                  CONTACTO
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <SearchBar/>
              <ButtonSearchBar/>
              <GPS/>
              <CartWidget/>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;

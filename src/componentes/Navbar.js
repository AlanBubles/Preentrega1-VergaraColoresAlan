import React from "react";
import CartWidget from "./CartWidget";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h3 className="brand">ChesShop</h3>
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
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Todos los articulos
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Tablero de ajedrez
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Relojes
              </a>
            </li>
          </ul>
          <a className="nav-link active" aria-current="page" href="#">
          <CartWidget />
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
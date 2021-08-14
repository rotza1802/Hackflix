import React from "react";

function Header() {
  return (
    <div>
      <div className="navbar d-felx justify-content text-white pt-3">
        <a href="/">Hackflix</a>
        <div>
          <a href="/">Inicio</a>
          <a className="ps-4" href="/buscar">
            Buscar
          </a>
          <a className="ps-4" href="/sobre-nosotros">
            Sobre nosotros
          </a>
          <a className="ps-4" href="/contacto">
            Contacto
          </a>
        </div>
      </div>
      <div className="text-center text-white mt-5">
        <h2>¡Tus peliculas favoritas!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Header;

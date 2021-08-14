import "../App.css";
import React from "react";
import Header from "./Header";

function AboutUs() {
  return (
    <div>
      <div className="header">
        <div className="container pt-2">
          <Header />
        </div>
      </div>
      <div id="about-us">
        <div class="container">
          <div class="row mt-5">
            <div class="col-md-6">
              <img
                id="company-photo"
                class="img-fluid mb-3"
                src="./aboutUs.jpg"
                alt="Sobre AUTOVIP"
              />
            </div>
            <div class="col-md-6">
              <h2>Sobre Nosotros</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                voluptate nihil eum consectetur similique? Consectetur, quod,
                incidunt, harum nisi dolores delectus reprehenderit voluptatem
                perferendis dicta dolorem non blanditiis ex fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                magni, aperiam vitae illum voluptatum aut sequi impedit non
                velit ab ea pariatur sint quidem corporis eveniet. Odit,
                temporibus reprehenderit dolorum!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
                ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
                necessitatibus perspiciatis quis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

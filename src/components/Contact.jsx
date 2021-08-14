import "../App.css";
import React from "react";
import Header from "./Header";

function Contact() {
  return (
    <div>
      <div className="header">
        <div className="container pt-2">
          <Header />
        </div>
      </div>
      <div class="modal-dialog modal-lg shadow" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Contacto</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value=""
                  class="form-control"
                  placeholder="Ingresar nombre completo..."
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value=""
                  class="form-control"
                  placeholder="Ingresar Email..."
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows="8"
                  cols="40"
                  class="form-control"
                  placeholder="Ingresar mensaje..."
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

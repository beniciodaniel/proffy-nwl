import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/52285940?s=460&u=62458ff1b9ec02aac67bb56fed2eaadb0ad16b33&v=4"
          alt="Beni"
        />
        <div>
          <strong>Benício Daniel</strong>
          <span>Architecture</span>
        </div>
      </header>

      <p>Teste teste teste</p>

      <footer>
        <p>
          Preço / hora
          <strong>R$ 80.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp Icon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;

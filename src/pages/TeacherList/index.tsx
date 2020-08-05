import React from "react";
import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;

import { FormEvent, useState } from "react";
import styles from "../styles/send-email.module.scss";

export default function SendEmail() {
  const [form, setForm] = useState("");

  const handleSendEmail = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Repositórios do Github</h1>

        <form className={styles.form} onSubmit={handleSendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
            onChange={(event) => setForm(event.target.value)}
          />

          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(event) => setForm(event.target.value)}
          />

          <input
            type="text"
            name="company"
            placeholder="Digite o nome da sua empresa"
            onChange={(event) => setForm(event.target.value)}
          />

          <input
            type="number"
            name="quantity"
            placeholder="Digite quantidade de frotas"
            onChange={(event) => setForm(event.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

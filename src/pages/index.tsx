import { FormEvent, useState } from "react";
import styles from "../styles/home.module.scss";
import { api } from "@/services/api";

interface UserRepository {
  id: number;
  name: string;
  html_url: string;
}

interface User {
  id: number;
  name: string;
  avatar_url: string;
  repositories: UserRepository[];
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User>({} as User);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.get(`/users/${search}`);
    const responseRepositories = await api.get(`/users/${search}/repos`);

    console.log(responseRepositories)

    const user: User = {
      ...response.data,
      repositories: responseRepositories.data,
    };

    setUser(user);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Repositórios do Github</h1>

        <form className={styles.form} onSubmit={handleSearch}>
          <input
            type="search"
            name="username"
            placeholder="Digite um nome de usuário"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>

        <div className={styles.containerUser}>
          <div>
            <img src={user?.avatar_url} alt={user?.name} />
            <h2>{user?.name}</h2>
          </div>
          {user && user.repositories?.length > 0 && (
            <div className={styles.listRepositories}>
              <ul>
                {user?.repositories?.map((repo) => (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank">{repo.html_url}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([
    "Le cinque app che cambieranno il tuo modo di fare la spesa",
    "Ritorno alla Luna: la nuova corsa allo spazio e le sue implicazioni",
  ]);

  return (
    <>
      <header>
        <h1>Gestione Articoli</h1>
      </header>
      <main>
        <div className="container">
          <ul>
            {articles.map((article) => (
              <li>{article}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;

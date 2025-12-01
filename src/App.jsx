import { useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([
    "Le cinque app che cambieranno il tuo modo di fare la spesa",
    "Ritorno alla Luna: la nuova corsa allo spazio e le sue implicazioni",
  ]);
  const [inputValue, SetInputValue] = useState("");

  const handleAddArticle = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      return console.log("inserisci un titolo");
    } else {
      setArticles([inputValue, ...articles]);
    }
  };
  return (
    <>
      <header>
        <h1>Gestione Articoli</h1>
      </header>
      <main>
        <div className="container">
          <h2>Aggiungi un nuovo articolo</h2>
          <form onSubmit={handleAddArticle}>
            <input
              type="text"
              placeholder="Inserisci articolo..."
              value={inputValue}
              onChange={(e) => SetInputValue(e.target.value)}
            />
            <button type="submit">Aggiungi</button>
          </form>

          <ul>
            {articles.map((article, index) => {
              return <li key={index}>{article}</li>;
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;

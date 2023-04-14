import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { Link } from "react-router-dom";

function App() {
  const data = ["🤐", "😘", "��", "🤣", "✅"];
  const [prediction, setPrediction] = useState(
    data[Math.round(Math.random() * data.length)]
  );
  const [result, setResult] = useState<string | null>(null);
  const handleResult = (): void => {
    setResult(prediction);
  };
  return (
    <div className="App">
      <p>
        Choissez un nombre à 2 chiffres et soustraire au nombre choisi le
        chiffre des dizaines et des unités par exemple si vous choisissez 67
        vous faites 67 - 6 - 7 ce qui donnerait 54
      </p>
      <p>Mémorisez l'émoji associé au résultat et pensez y très fort</p>
      <Table prediction={prediction} />
      {result ? (
        ""
      ) : (
        <button onClick={handleResult}>Afficher ce que vous pensez</button>
      )}
      {result && (
        <p>
          Vous pensez: <span className="result">{result}</span>
        </p>
      )}
      <Link to="/">Accueil</Link>
    </div>
  );
}

export default App;

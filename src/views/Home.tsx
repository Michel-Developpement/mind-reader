import React from "react";
import brain from "../assets/brain.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Le lecteur de pensées</h1>
      <img className="img" src={brain} alt="télépathie" />
      <p>L'appli qui lit dans vos pensées</p>
      <Link to="/game">Jouer</Link>
    </div>
  );
}

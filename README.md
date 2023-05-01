# Francais

Cette application à été faite en React et TypeScript avec Vite.
Elle se base sur un tour de magie mathématique dont voici le secret :
Si vous choisissez un nombre à deux chiffres auquel vous faite une soustraction du chiffre des dizaines et des unités par exemple 55 - 5 - 5, le résultat sera toujours un multiple de neuf quel que soit le nombre de départ choisi.
L'appli fonctionne de le façon suivante :

Dans un composent Game je part d'un tableau data qui contient des émojis.

```tsx
const data = [
  "🤐",
  "😘",
  "🤣",
  "✅",
  "🤔",
  "🤩",
  "🤪",
  "🤫",
  "🤭",
  "🤮",
  "🤯",
  // etc... etc...
];
```

Ensuite je crée un state qui va aléatoirement prendre un émoji du tableau data :

```tsx
const [prediction, setPrediction] = useState(
  data[Math.round(Math.random() * data.length)]
);
```

Ensuite dans un composant Table ou j'ai passé en props prediction j'ai créé un tableau emoji contenant 100 émoji dont tous les multiples de neuf contienent le state prediction:

```tsx
const emoji = [
  "👍",
  "👎",
  "🤷‍♂️",
  "🤷‍♀️",
  "🤷",
  "�",
  "🤦‍♂️",
  "👋",
  "👍",
  prediction,
  // etc... etc...
];
```

Ensuite j'ai fait dans le return :

```tsx
{
  emoji.map((item, key) => (
    <p className="table-cell" key={key}>
      {key} : {item}
    </p>
  ));
}
```

Dans le composant Game j'ai aussi créé un state result qui est initialisé à null, et quand l'utilisateur clique sur le bouton "Afficher" le state résulte prend la valeur de prediction via une fonction handleResult et l'émoji est afficher avec un rendu conditionel :

```tsx
const handleResult = (): void => {
  setResult(prediction);
};

// et un affichage conditionel dans le return :
{
  result && (
    <p>
      Vous pensez à <span className="result">{result}</span>
    </p>
  );
}
```

J'ai installer react-router et fait une page Homme et une page Game

Voila comment j'ai procédé !

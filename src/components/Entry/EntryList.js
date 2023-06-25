//entry list
//each entry has a title, a text and a favorite icon button

export default function EntryList() {
  const entries = [
    {
      id: 1,
      title: "That's life in the city",
      date: "FEB 27, 2028",
      text: "Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque.",
      favorite: true,
    },

    {
      id: 2,
      title: "That's life in the city",
      date: "FEB 26, 2028",
      text: "Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque.",
      favorite: false,
    },

    {
      id: 3,
      title: "That's life in the city",
      date: "FEB 25, 2028",
      text: "Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque.",
      favorite: false,
    },
  ];
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          <h2>{entry.title}</h2>
          <p>{entry.date}</p>
          <p>{entry.text}</p>
          <button>{entry.favorite ? "Remove Favorite" : "Add Favorite"}</button>
        </li>
      ))}
    </ul>
  );
}

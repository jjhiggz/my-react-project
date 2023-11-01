import "./CharacterRatings.css";

function CharacterRatings({ characters }) {
  const topCharacters = [...characters]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table className="character-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topCharacters.map((character, index) => (
            <tr
              key={character.name}
              className={index % 2 === 0 ? "dark" : "light"}
            >
              <td>{character.name}</td>
              <td>{character.skillset}</td>
              <td>{character.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CharacterRatings;

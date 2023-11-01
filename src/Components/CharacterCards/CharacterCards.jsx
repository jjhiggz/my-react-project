import { Component } from 'react';
import './CharacterCards.css';

class CharacterCards extends Component {
  render() {
    const { characters } = this.props; // Destructuring props to use in JSX below

    return (
      <section id="character-cards">
        {characters.map((character) => (
          <div key={character.name} className="card">
            <div className="card-titles">
              <h3>{character.name}</h3>
              {character.nickName && (
                <h4>{character.nickName}</h4>
              )}
              
            </div>
            <img
              src={character.imageUrl}
              alt={character.name}
              style={{ maxWidth: '100%' }}
            />
            <p>{character.background}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default CharacterCards;
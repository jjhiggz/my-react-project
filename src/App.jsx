import { characters } from "./characters";
import "./App.css";
import Header from "./Components/Header/Header";
import CharacterRatings from "./Components/CharacterRatings/CharacterRatings";
import CharacterCards from "./Components/CharacterCards/CharacterCards";

const App = () => (
  <div>
    <Header title="Fullmetal Alchemist" />
    <CharacterRatings characters={characters} />
    <CharacterCards characters={characters} />
  </div>
);

export default App;

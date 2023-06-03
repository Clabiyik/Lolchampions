import React, { Component } from "react";
import "./Main.css";
import charactersData from "../data/characters.json";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      filteredCharacters: charactersData.characters,
      selectedRegion: "",
      selectedDifficulty: "",
    };
  }

  handleSearch = (event) => {
    const { value } = event.target;
    const { characters } = charactersData;
    const { selectedRegion, selectedDifficulty } = this.state;

    const filteredResults = characters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );

    let filteredCharacters = filteredResults;

    if (selectedRegion) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.region === selectedRegion
      );
    }

    if (selectedDifficulty) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.difficulty === selectedDifficulty
      );
    }

    this.setState({
      searchInput: value,
      filteredCharacters: filteredCharacters,
    });
  };

  handleRegionChange = (event) => {
    const { value } = event.target;
    const { searchInput, selectedDifficulty } = this.state;
    const { characters } = charactersData;

    let filteredCharacters = characters;

    if (value) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.region === value
      );
    }

    if (searchInput) {
      filteredCharacters = filteredCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (selectedDifficulty) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.difficulty === selectedDifficulty
      );
    }

    this.setState({
      selectedRegion: value,
      filteredCharacters: filteredCharacters,
    });
  };

  handleDifficultyChange = (event) => {
    const { value } = event.target;
    const { searchInput, selectedRegion } = this.state;
    const { characters } = charactersData;

    let filteredCharacters = characters;

    if (value) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.difficulty === value
      );
    }

    if (searchInput) {
      filteredCharacters = filteredCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (selectedRegion) {
      filteredCharacters = filteredCharacters.filter(
        (character) => character.region === selectedRegion
      );
    }

    this.setState({
      selectedDifficulty: value,
      filteredCharacters: filteredCharacters,
    });
  };

  resetSearch = () => {
    this.setState({
      searchInput: "",
      filteredCharacters: charactersData.characters,
      selectedRegion: "",
      selectedDifficulty: "",
    });
  };

  render() {
    const { filteredCharacters, searchInput } = this.state;

    return (
      <div className="container">
        <div className="row my-5 col-xl-12">
          <div className="dropdown col-xl-3 mx-3">
            <button
              className="btn btn-warning col-xl-12"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Difficulty
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleDifficultyChange}
                  value=""
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleDifficultyChange}
                  value="Easy"
                >
                  Easy
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleDifficultyChange}
                  value="Normal"
                >
                  Normal
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleDifficultyChange}
                  value="Hard"
                >
                  Hard
                </button>
              </li>
            </ul>
          </div>

          <div className="dropdown col-xl-3 mx-3">
            <button
              className="btn btn-danger  col-xl-12"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Region
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value=""
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value="Ionia"
                >
                  Ionia
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value="Frejlord"
                >
                  Freljord
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value="Shurima"
                >
                  Shurima
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value="Demacia"
                >
                  Demacia
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value="Piltover"
                >
                  Piltover
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={this.handleRegionChange}
                  value="Targon"
                >
                  Targon
                </button>
              </li>
            </ul>
          </div>
          <div className="mx-auto col-xl-4 mx-3">
            <input
              className="form-control"
              type="text"
              placeholder="Search Champion"
              value={searchInput}
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {filteredCharacters.map((character) => (
            <div className="champion-card mx-1" key={character.id}>
              <div className="champion-card-image">
                <img src={character.img} alt={character.name} />
              </div>
              <div className="champion-card-details">
                <h3 className="champion-card-name">{character.name}</h3>
                <p className="champion-card-role">{character.region}</p>
                <div
                  className={`champion-card-difficulty ${
                    character.difficulty === "Easy"
                      ? "difficulty-icon-blue"
                      : character.difficulty === "Normal"
                      ? "difficulty-icon-orange"
                      : character.difficulty === "Hard"
                      ? "difficulty-icon-red"
                      : ""
                  }`}
                >
                  <span className="difficulty-text">
                    {character.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Navbar;

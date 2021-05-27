import React, { useState, Dispatch, SetStateAction } from "react";
import "./style.scss";
import { Movie } from "../../../interfaces/types";

interface Props {
  setSearchMoves: Dispatch<SetStateAction<null | Movie[]>>;
}

const Search: React.FC<Props> = ({ setSearchMoves }) => {
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputText.trim() === "") {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${inputText}`
    )
      .then((res) => res.json())
      .then((data) => setSearchMoves(data.results));
    setInputText("");
  };

  return (
    <div className="searchArea">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={inputText}
          onChange={handleInputChange}
          required
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

const App = () => {
  const [names, setNames] = useState(JSON.parse(window.localStorage.getItem("savedNames")) || []);

  const removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = names.filter(filterCallback);
    setNames(newNames);
  };
  const addName = (name) => {
    const newNames = [name, ...names];
    setNames(newNames);
  };

  useEffect(() => {
    window.localStorage.setItem("savedNames", JSON.stringify(names));
  }, [names]);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      <UserInput addName={addName} />
      <NameTagList names={names} removeName={removeName} />
    </div>
  );
}

export default App;

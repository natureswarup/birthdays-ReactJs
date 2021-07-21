import React from "react";
import { data } from "./data";
import { useState } from "react";
import "./App.css";

import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);

  const removeAll = () => {
    setPeople([]);
  };

  const removePerson = (id) => {
    let newList = people.filter((person) => {
      return person.id !== id;
    });
    return setPeople(newList);
  };
  return (
    <>
      <div className="container">
        <h2>{people.length} Birthday's Today</h2>
        <List people={people} removePerson={removePerson} />
        <button className="clearBtn" onClick={removeAll}>
          Clear
        </button>
      </div>
    </>
  );
}

export default App;

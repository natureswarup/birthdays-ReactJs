import React from "react";

import "./list.css";

const List = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        const { id, age, name, img } = person;
        return (
          <div key={id} className="item">
            <div className="item--details">
              <img src={img} alt="" />
              <div className="item--detailsStats">
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </div>

            <button onClick={() => props.removePerson(id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;

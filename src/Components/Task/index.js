import React, { useState } from "react";

import "./Card.scss";

const Card = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  const cardStyle = {
    textDecoration: isCompleted ? "line-through" : "none",
  };
  const { card } = props;
  //   const cards = mapOrder(card.image, card.cardOrder, 'id');

  return (
    <>
      <div className="card-item">
        {card.image && (
          <img
            src={card.image}
            onMouseDown={(event) => event.preventDefault()}
            alt="Card"
          />
        )}

        <label className="">
          <input
            type="checkbox"
            id="myCheckbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
          />
          <span className="task" style={cardStyle}>
            {card.title}
          </span>
        </label>
      </div>
    </>
  );
};

export default Card;

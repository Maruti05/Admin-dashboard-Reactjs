import "../Cards/Cards.css";
import React from "react";
import { Cardsdata } from "../../Data/Data";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {Cardsdata.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              icon={card.icon}
              series={card.series}
              
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

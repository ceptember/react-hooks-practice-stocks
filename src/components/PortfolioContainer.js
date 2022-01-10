import React from "react";
import Stock from "./Stock";

function PortfolioContainer({owned, onSell}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {owned.map( (stock) => <Stock key={stock.id} stock={stock} buySell={onSell}/> )}
    </div>
  );
}

export default PortfolioContainer;

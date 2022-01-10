import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuy}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock stock={stock} buySell={onBuy} key={stock.ticker}/>)}
    </div>
  );
}

export default StockContainer;

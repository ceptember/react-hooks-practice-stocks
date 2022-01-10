import React from "react";

function Stock({stock, buySell}) {

// NEED CONDITIONAL LOGIC TO SELL IF ALREADY BOUGHT 
//OR MAYBE SINCE WE CALL IT FROM THE PORTFOLIO, PASS IN DIFFERENT PROPS 

  function handleBuySell (){
    buySell(stock)
  }
  return (
    <div onClick={handleBuySell}> 
      <div className="card">
        <div className="card-body" id={stock.id}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

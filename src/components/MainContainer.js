import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {

  const [allStocks, setAllStocks] = useState([]) // all the stocks originally fetched 
  const [stocks, setStocks] = useState([]) // stocks to display
  const [ownedStocks, setOwnedStocks] = useState([])

  useEffect( ()=>{
    fetch('http://localhost:3001/stocks')
      .then(resp => resp.json())
      .then(data => {
        setAllStocks(data);
        setStocks(data);
      })
  }, [])

  function buyStock(stk){
    setOwnedStocks( ()=>[...ownedStocks, stk] )
  }

  function sellStock(stk){
    const updatedOwnedStocks = ownedStocks.filter( stock => stock.id !== stk.id )
    setOwnedStocks(updatedOwnedStocks)
  }

  function filterStocks(stockType){
    const filteredStocks = allStocks.filter( (stock) => stock.type === stockType); 
    setStocks(filteredStocks);
  }

  function sortStocks(sortBy){
    // called with "Alphabetically" or "Price"
    const sortedStocks = [...allStocks];
    if (sortBy === "Alphabetically"){
      sortedStocks.sort( (a,b) => {
        if(a.name < b.name){
          return -1; 
        }
        else if (a.name > b.name){
          return 1; 
        }
        else {return 0};
      } )
    }
    else if (sortBy === "Price"){
      sortedStocks.sort( (a,b) => a.price-b.price ) 
    }

    setStocks(sortedStocks);

  }

  return (
    <div>
      <SearchBar onFilter={filterStocks} onSort={sortStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuy={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer owned={ownedStocks} onSell={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

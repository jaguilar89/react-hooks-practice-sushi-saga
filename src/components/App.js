import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [indexPosition, setIndexPosition] = useState(0); //starting index position for sushi elements
  const [eatenSushi, setEatenSushi] = useState([]); //Array of sushi that was eaten??
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((sushiData) => setSushiList(sushiData))
  }, []);

  const sushiToDisplay = sushiList.slice(indexPosition, indexPosition + 4);

  function handleClickMoreSushi() {
    setIndexPosition((indexPosition) => indexPosition += 4)
  };

  function handleEatSushi(sushi) {
    if (money > sushi.price) {
      setEatenSushi([...eatenSushi, sushi])
      handleUpdateMoney(sushi)
    }
  };

  function handleUpdateMoney(sushi) {
    setMoney((money) => money - sushi.price)
  }

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushiToDisplay} 
        onClickMore={handleClickMoreSushi}
        onClickSushi={handleEatSushi}
        eatenSushi={eatenSushi}
      />
      <Table 
        plates={eatenSushi}
        moneyLeft={money}  
        />
    </div>
  );
}

export default App;

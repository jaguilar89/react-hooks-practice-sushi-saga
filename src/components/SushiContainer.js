import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, onClickMore, onClickSushi, eatenSushi }) {
  return (
    <div className="belt">
      {sushi.map((sushi) => <Sushi 
                              key={sushi.id} 
                              sushiInfo={sushi} 
                              onClickSushi={onClickSushi}
                              eatenSushi={eatenSushi} 
                            />
       )}
      <MoreButton onClickMore={onClickMore}/>
    </div>
  );
}

export default SushiContainer;

import React from "react";

function Sushi({ sushiInfo, onClickSushi, eatenSushi }) {
  const {name, img_url, price} = sushiInfo
  return (
    <div className="sushi">
      <div className="plate" onClick={() => onClickSushi(sushiInfo)}>
        {eatenSushi.includes(sushiInfo) ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

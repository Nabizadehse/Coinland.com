import React from "react";
const Coin = ({ image, name, symbol, price }) => {
  return (
    <div className="chart-box-sm">
      <div className="coin-box">
        <div className="coin-img-name">
          <img src={image} alt="coin" />
          <h1>{name}</h1>
        </div>
        {/* <p>{symbol}</p> */}
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Coin;
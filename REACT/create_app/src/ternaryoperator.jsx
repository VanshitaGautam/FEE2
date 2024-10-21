
import React from "react";

const TernaryOp = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let luckyNum = 3;
  return (
    <div>
      {randomNumber === luckyNum ? (
        <h1>
          GOOD LUCK
          <img src="https://i.pinimg.com/236x/6d/b5/25/6db5253ce9199edc2f006f80f686c481.jpg"></img>
        </h1>
      ) : (
        "BAD LUCK, Number was : " + randomNumber
      )}
    </div>
  );
};

export default TernaryOp;
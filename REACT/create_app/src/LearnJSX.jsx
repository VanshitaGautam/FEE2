import React from "react";

const LearnJSX = () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return (
    <div>
      <h1>Learn JSX:</h1>

      <h2>Random: {Math.floor(Math.random() * 10) + 1}</h2>

      <h3>Random: {randomNumber}</h3>
    </div>
  );
};

export default LearnJSX;
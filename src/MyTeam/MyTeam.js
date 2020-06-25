import React, { useState, useEffect } from "react";

const MyTeam = (props) => {
  console.log(props);
  return (
    <>
      <h1> My Team </h1>
      {props.myTeam.map((element, index) => {
        return (
          <div>
            <img src={element.image} src="" />
            <h4> Name: {element.name}</h4>
            <h4>Height: {element.height}</h4>
            <h4>Weight: {element.weight}</h4>
            <h4>Type: {element.type}</h4>
          </div>
        );
      })}
    </>
  );
};

export default MyTeam;

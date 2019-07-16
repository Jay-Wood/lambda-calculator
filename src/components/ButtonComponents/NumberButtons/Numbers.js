import React, { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data.js";
console.log("I'm numbers.js")

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const numbers = {numbers};

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       const numbers2 = {numbers}.map((num) => {
         NumberButton(num)
       }); 
    </div>
  );
};

export default Numbers;
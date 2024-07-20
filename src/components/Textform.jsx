import React from "react";
import { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState(""); //initially , 'text' valu is empty string

  const OnChange = (event) => {
    //is an event handler fun that updates the value of 'text' state with textarea value
    setText(event.target.value); // event.target.value gets the value of textarea
  }; // setText() ,it updtaes the value of 'text' with event.target.value where, event is an object

  const handleUpper = () => {
    //is an event handler fun that changes 'text' value to uppercase
    let newText = text.toUpperCase(); // newText stores the uppercased value
    setText(newText); //setText(newtext) changes the value of 'text' to the value of 'newText' so as to
  };
  const handlelower = () => {
    //is an event handler fun that changes 'text' value to uppercase
    let newText = text.toLowerCase(); // newText stores the uppercased value
    setText(newText); //setText(newtext) changes the value of 'text' to the value of 'newText' so as to
  };
  const handleclear = () => {
    //is an event handler fun that changes 'text' value to uppercase
    // newText stores the uppercased value
    setText(""); //setText(newtext) changes the value of 'text' to the value of 'newText' so as to
  };
  const handleCopy = () => {
    let text = document.getElementById("myTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = () => {
    let mainText = text.split(/[ ]+/);
    let final = mainText.join(" ");
    setText(final);
  };

  let mainText = text.split(/[ ]+/);
  let final = mainText.join(" "); // to count only one extra space as a word

  return (
    <div>
      <div className="container ">
        <h1 className={`container my-3 text-${props.mode === 'dark' ? 'light':'dark'}`}>{props.title}</h1>
        <div className="mb-1 ">
          <textarea id="myTextarea" className="form-control  "style={{
                                  border: props.mode === "dark" ? "black" : "",
                                  backgroundColor: props.mode === "dark" ? "#060859" : "aliceblue",
                                  color: props.mode === "dark" ? "white" : "black"}}
         onChange={OnChange} value={text} rows="8"></textarea>
        </div>
        <div className="container ">
          <button className="btn btn-primary m-1" onClick={handleUpper}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary m-1" onClick={handlelower}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary m-1" onClick={handleclear}>
            Clear All
          </button>
          <button className="btn btn-primary m-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary m-1" onClick={handleExtraSpace}>
            Remove Extra Spaces
          </button>
        </div>
      </div>

      <div className={`container my-3 text-${props.mode === 'light' ? 'dark':'light'}`}>
        <h2>{props.textsum}:</h2>
          <p>
           {text.length} characters and {final.split(" ").length} words
         </p>
        <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to Preview"}</p>
      </div>
    </div>
  );
};

export default Textform;

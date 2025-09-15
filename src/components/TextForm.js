import React, {useState} from 'react'


export default function Textform({ title = "enter title here" }) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  return (
    <>
      <div>
        <h1>{title}</h1>

        {/* <label htmlFor="myBox" className="form-label">Comments</label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows={8}
          placeholder="Leave a comment here"
          value={text}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

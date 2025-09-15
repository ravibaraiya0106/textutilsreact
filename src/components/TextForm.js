import React, { useState } from "react";

export default function TextForm({
  title = "Enter title here",
  mode,
  showAlert,
}) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
    showAlert("Text Cleared!", "danger");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    showAlert("Extra spaces removed!", "warning");
  };
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    showAlert("Capitalized each word!", "info");
  };

  return (
    <>
      <div className="container">
        <h1>{title}</h1>

        <textarea
          className="form-control"
          id="myBox"
          rows={8}
          placeholder="Leave a comment here"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: mode === "dark" ? "#333" : "white",
            color: mode === "dark" ? "white" : "black",
          }}
        ></textarea>

        <div>
          <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-info my-3 mx-2" onClick={handleCapitalize}>
            Capitalize Words
          </button>
          <button
            className="btn btn-warning my-3 mx-2"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-success my-3 mx-2"
            onClick={handleCopyClick}
          >
            Copy Text
          </button>
          <button
            className="btn btn-danger my-3 mx-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word.length > 0).length}{" "}
          Minutes read
        </p>
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

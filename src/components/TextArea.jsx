import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ word, setWord }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    //Basic validation
    if (newText.includes("<script>")) {
      //alert("No script tag allowed");
      newText = newText.replace("<script>", "");
      setWarningText("No script tag allowed!");
    } else if (newText.includes("@")) {
      setWarningText("No @ symbol allowed");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setWord(newText);
  };

  return (
    <div className="textarea">
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
        value={word}
      ></textarea>
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}

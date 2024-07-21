import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ word, setWord }) {
  const [showWarning, setShowWarning] = useState(false);
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      //alert("No script tag allowed");
      newText = newText.replace("<script>", "");
      setShowWarning(true);
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
      {showWarning && <Warning />}
    </div>
  );
}

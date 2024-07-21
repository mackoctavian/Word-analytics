export default function TextArea({ word, setWord }) {
  return (
    <textarea
      className="textarea"
      onChange={(e) => {
        setWord(e.target.value);
      }}
      placeholder="Enter your text"
      spellCheck="false"
      value={word}
    ></textarea>
  );
}

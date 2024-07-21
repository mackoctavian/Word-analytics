import { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import TextArea from "./TextArea";

function App() {
  const [word, setWord] = useState("");
  const numberOfCharacters = word.length;

  return (
    <>
      <Header />
      <Container>
        <TextArea setWord={setWord} word={word} />
        <Stats characters={numberOfCharacters} />
      </Container>
      <Footer />
    </>
  );
}

export default App;

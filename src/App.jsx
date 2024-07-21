import { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import TextArea from "./TextArea";

function App() {
  const [word, setWord] = useState("");
  const numberOfCharacters = word.length;
  const instagramCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;
  const numberOfWords = word.split(/\s/).filter((word) => word !== "").length;

  return (
    <>
      <Header />
      <Container>
        <TextArea setWord={setWord} word={word} />
        <Stats
          characters={numberOfCharacters}
          instagramCharactersLeft={instagramCharactersLeft}
          facebookCharactersLeft={facebookCharactersLeft}
          numberOfWords={numberOfWords}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import TextArea from "./TextArea";

function App() {
  const [word, setWord] = useState("");

  const stats = {
    numberOfWords: word.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: word.length,
    instagramCharactersLeft: 280 - word.length,
    facebookCharactersLeft: 2200 - word.length,
  };

  return (
    <>
      <Header />
      <Container>
        <TextArea setWord={setWord} word={word} />
        <Stats stats={stats} />
      </Container>
      <Footer />
    </>
  );
}

export default App;

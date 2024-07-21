import { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "./constants";

function App() {
  const [word, setWord] = useState("");

  const stats = {
    numberOfWords: word.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: word.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - word.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - word.length,
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

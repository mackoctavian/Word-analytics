import { useState } from "react";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import TextArea from "./TextArea";

function App() {
  const [word, setWord] = useState("");
  return (
    <>
      <Header />
      <Container>
        <TextArea setWord={setWord} word={word} />
        <Stats word={word} />
      </Container>
      <Footer />
    </>
  );
}

export default App;

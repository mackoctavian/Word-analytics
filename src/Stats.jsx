export default function Stats({
  characters,
  instagramCharactersLeft,
  facebookCharactersLeft,
  numberOfWords,
}) {
  return (
    <section className="stats">
      <Stat number={numberOfWords} name="words"></Stat>
      <Stat number={characters} name="characters"></Stat>
      <Stat number={instagramCharactersLeft} name="Instagram"></Stat>
      <Stat number={facebookCharactersLeft} name="Facebook"></Stat>
    </section>
  );
}

function Stat({ number, name }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{name}</h2>
    </section>
  );
}

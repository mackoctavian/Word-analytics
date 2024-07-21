export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} name="words"></Stat>
      <Stat number={stats.numberOfCharacters} name="characters"></Stat>
      <Stat number={stats.instagramCharactersLeft} name="Instagram"></Stat>
      <Stat number={stats.facebookCharactersLeft} name="Facebook"></Stat>
    </section>
  );
}

function Stat({ number, name }) {
  return (
    <section className="stat">
      <span className={number < 0 ? "stat__number--limit" : "stat__number"}>
        {number}
      </span>
      <h2 className="second-heading">{name}</h2>
    </section>
  );
}

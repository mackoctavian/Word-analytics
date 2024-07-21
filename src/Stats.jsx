export default function Stats({ word }) {
  return (
    <section className="stats">
      <Stat number="0" name="words"></Stat>
      <Stat number="0" name="characters"></Stat>
      <Stat number="280" name="Instagram"></Stat>
      <Stat number="2200" name="Facebook"></Stat>
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

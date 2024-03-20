export default function Home() {
  const name = "Sage Brandtzæg";
  const studie = "informatikk";
  const items = ["Sort", "Rosa", "Blå", "Lilla"];

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  };

  const bigTextStyle = {
    fontSize: '1.5em',
  };

  const smallTextStyle = {
    fontSize: '1em',
  };

  return (
    <div style={centerStyle}>
      <div>
        <h1 style={bigTextStyle}>Hei, jeg er {name}</h1>
        <h2 style={smallTextStyle}>Mine favorittfarger er {items.join(', ')}</h2> {/* Oppdatert for å vise en komma-separert liste */}
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{idx + 1}: {item}</li> // Legger til en unik 'key' prop basert på indeksen
          ))}
        </ul>
      </div>
    </div>
  );
}

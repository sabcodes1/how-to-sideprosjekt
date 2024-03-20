
export default function Home() {
  const name = "Sage Brandtzæg";
  const studie = "informatikk";
  const items = ["Sort", " Rosa", " Blå", " Lilla"]
  const items_ranked = [" 1.Sort"," 2.Rosa", " 3. Blå", " 4.Lilla"]

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
  };

  // Definerer en stil for større tekst
  const bigTextStyle = {
    fontSize: '1.5em', // Du kan justere denne verdien for å øke eller redusere tekststørrelsen
  };

  // Definerer en stil for større tekst
  const smallTextStyle = {
    fontSize: '1em', // Du kan justere denne verdien for å øke eller redusere tekststørrelsen
  };

  return (
    <div style={centerStyle}>
      <div>
        <h1 style={bigTextStyle}>Hei, jeg er {name} </h1>
        <h2 style={smallTextStyle}> Mine favoritt farger er {items} </h2>
        <ul>
          {items.map((item, idx) => (
            <li >{idx+1}: {item}</li> // Bruker 'map' for å lage et <li>-element for hver vare
          ))}
        </ul>
      </div>
    </div>
  );
}

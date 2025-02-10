



export default function Home() {
  const name = "Sage Brandtzæg";
  const items = ["Sort", "Rosa", "Blå", "Lilla"];

  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    backgroundColor: '#f0f0f0',
  };

  const bigTextStyle = {
    fontSize: '1.5em',
    lineHeight: '1.5',
  };

  const smallTextStyle = {
    fontSize: '1em',
    lineHeight: '2',
  };

  const listItemStyle = {
    lineHeight: '2', // Her legger du til mer mellomrom mellom listeelementene
  };


  return (
    <div style={centerStyle}>
      <div>
        <h1 className="text-4xl">Hei, jeg er {name}</h1>
        <h2 style={smallTextStyle}>Mine favorittfarger er {items.join(', ')}</h2> {/* Oppdatert for å vise en komma-separert liste */}
        <p>
          Jeg studerer Datateknologi på Universitetet i Bergen, og har en stor
          interesse for webutvikling.
        </p>  
        <ul>
          {items.map((item, idx) => (
            <li key={idx}style = {listItemStyle} >{idx + 1}: {item}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

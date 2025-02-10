import Link from "next/link";

export default function Prosjekter() {
  const name = "Sage August Brandtzæg";

  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
    backgroundColor: "#f0f0f0",
  };


  return (
    <div className = "h-full flex justify-center align-middle bg-slate-200">
      <div>
        <h1 className="text-6xl back pt-32 text-center"> {name}</h1>
        <p className="text-2xl p-3 text-center">Velkommen til min prosjektside! </p>
        <Link href={"/"} className="text-3xl pt-7 "> CV</Link>
      </div> 
    </div>
  );
}

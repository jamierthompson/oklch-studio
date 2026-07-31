import Color from "colorjs.io";

// Fixed until the seed becomes an input (#30). It is here so the scaffold
// actually exercises colorjs.io in dev, test and build rather than merely
// listing it as a dependency.
const SEED = "#7c3aed";

function App() {
  const oklch = new Color(SEED).to("oklch").toString();

  return (
    <main>
      <h1>oklch-studio</h1>
      <p>
        <code>{SEED}</code> is <code>{oklch}</code>
      </p>
      <p>Nothing is solved yet. This is the scaffold.</p>
    </main>
  );
}

export default App;

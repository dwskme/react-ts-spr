import styles from "./App.module.css";
import ScoreAndResults from "./sections/ScoreAndResults";
import ChooseAndPlay from "./sections/ChooseAndPlay";
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>Scissors, Paper, Rock</h1>
        <p>React TS Game.</p>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
    </div>
  );
}

export default App;

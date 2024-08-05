import styles from "./App.module.css";
import Display from "./Display";
import ButtonContainer from "./ButtonContainer";
function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;

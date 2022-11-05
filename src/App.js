import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className={styles.Main}>
        <h1>Home Page</h1>
        <h1>Sign in</h1>
      </Container>
    </div>
  );
}

export default App;
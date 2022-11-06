import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom'
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path='/' render={() => <h1>Home Page</h1>} />
          <Route exact path='/signin' render={() => <h1>Sign in</h1>} />
          <Route exact path='/signup' render={() => <SignUpForm />} />
          <Route render={() => <h3>Page not found</h3>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
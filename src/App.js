import logo from './logo.svg';
import './App.css';
import Greet from './components/functional/Greet';
import Wish from './components/class/Wish';
import Welcome from './jsx/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greet />
      <Wish />
      <Welcome />
    </div>
  );
}

export default App;

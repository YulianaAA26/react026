import logo from './logo.svg';
import './App.css';
import C01component from './component/C01component';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';

function App() {
  return (
    <div>
      <h1>Component 01</h1>
      <C01component></C01component>
      <h1>Component 02</h1>
      <C02contador></C02contador>
      <h1>Component 03</h1>
      <C03dobleestado></C03dobleestado>
    </div>
  );
}

export default App;

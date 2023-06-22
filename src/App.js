
import './App.css';
import HelloWorld from './components/HelloWorld';
import CounterExample from './components/CounterExample';

function App() {
  return (
    <div>
      <HelloWorld message="There, Welcome." expression="Wow"/>

      <CounterExample/>
    </div>
  );
}

export default App;

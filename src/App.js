import Robots from './components/Robots';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1 className='app-title'>
        <span className='rLetter'>R</span>obots{' '}
        <span className='rLetter'>R</span>olodex
      </h1>
      <Robots />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavBar/Nav';
import IntroPage from './Components/IntroPage/IntroPage';

function App() {
  return (
    <div className="App">
      {/* <div className='cursor'></div>
      <div className='cursor2'></div> */}
        <div>
          <Nav></Nav>
        </div>

        <div className='introPage'>
          <IntroPage></IntroPage>
        </div>

    </div>
  );
}

export default App;

import './App.css';
import Nav from './Components/NavBar/Nav';
import IntroPage from './Components/IntroPage/IntroPage';
import Resume from './Components/Resume/Resume';
import bgimg from "./Images/LOGO.png"

function App() {
  return (
    <div className="App">
      {/* <div className='cursor'></div>
      <div className='cursor2'></div> */}
        <div>
          <Nav></Nav>
        </div>

        <div className='introPage' id="introPageID">

          <IntroPage></IntroPage>
        </div>

        <div className='resumePage' id='resumePageID'>
          <Resume></Resume>
        </div>

    </div>
  );
}

export default App;

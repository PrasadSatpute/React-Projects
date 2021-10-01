import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import About from './About/About'
import Contact from './Contact/Contact'
import Project from './ProjectPage/Project'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;

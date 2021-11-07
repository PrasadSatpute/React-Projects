import logo from './logo.svg';
import './App.css';

import '../src/TemplateFiles/lib/bootstrap/css/bootstrap.min.css'
import '../src/TemplateFiles/lib/font-awesome/css/font-awesome.min.css'
import '../src/TemplateFiles/lib/animate/animate.min.css'
import '../src/TemplateFiles/css/style.css'

import Header from './Home/A_Header/Header';
import Hero from './Home/B_Hero/Hero';

function App() {
  return (<>
    <Header></Header>
    <Hero></Hero>
    </>
  );
}

export default App;

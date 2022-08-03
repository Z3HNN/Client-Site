import './App.css';
import Footer from './components/Footer';
import Main from './components/main';
import Nav from './components/Nav';


function App() {

  return (
    <div>
      <div className="page__bg"></div>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

// import About from './pages/About';
import "../styles/Home.css";

function App() {

  return (
    <div className="home-div">
        <div className="jumbo-header">
            <h1 className="home-header">
                Welcome to DockJocks.
            </h1>
        </div>
        <div className="about">
            About
        </div>
        <div className="services">
            What we offer.
        </div>
        <div className="rates">
            Rates
        </div>
    </div>
  );
}

export default App;
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Router from "./Router/Router";

function App() {
  return (
    <div className="app">
    <Header />
         <Router/>
         <Footer/>
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Router from "./Router/Router";

function App() {
  const isLoggedIn = true;
  return (
    <div className="app">
      {!isLoggedIn && <Header /> }
         <Router/>
         <Footer/>
    </div>
  );
}

export default App;

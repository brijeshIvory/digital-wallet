import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Router from "./Router/Router";
import Auth from "./Components/Auth/index.jsx";
function App() {
  const isLoggedIn = true;
  return (
    <div className="app">
      <Header />
      {/* <Router /> */}
      <Auth />
      <Footer />
    </div>
  );
}

export default App;

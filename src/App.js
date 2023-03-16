import "./App.css";
import Footer from "./Components/Footer";
// import Passbook from "./Components/Passbook";
import Router from "./Router/Router";
// import CreateID from "./Components/CreateID";
import Passbook from "./Components/Passbook";
import ThirdPartyTransaction from "./Components/3rdPartyTransaction/index.jsx";
function App() {
  return (
    <div className="app">
      <Router />
      <Footer />
      {/* <CreateID /> */}
      {/* <Passbook /> */}
      {/* <ThirdPartyTransaction /> */}
    </div>
  );
}

export default App;

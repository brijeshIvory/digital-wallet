import "./App.css";
import Footer from "./Components/Footer";
// import Passbook from "./Components/Passbook";
import Router from "./Router/Router";
import NewHomePage from "./Components/NewHomePage";
import ReferralPopup from "./Components/ReferralPopup/ReferralPopup.jsx";
function App() {
  return (
    <div className="app">
      {/* <Passbook /> */}
      {/* <NewHomePage /> */}
      {/* <Router />
      <Footer /> */}
      <ReferralPopup />
    </div>
  );
}

export default App;

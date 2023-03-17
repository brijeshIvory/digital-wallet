import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { GetUserDetails } from "./App/Redux/Actions/AuthActions";
import { GetWalletBalance } from "./App/Redux/Actions/WalletActions";
import Router from "./Router/Router";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserDetails({ id:3}));
    dispatch(GetWalletBalance({ user_id:3}));
  }, []);
  return (
    <div className="app">
      <Router />
    </div>
  );
}

export default App;

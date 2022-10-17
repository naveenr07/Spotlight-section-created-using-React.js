import "./App.css";
import Spotlight from "./components/screens/Spotlight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/screens/PageNotFound";
import Summary from "./components/screens/Summary";
import Product from "./components/screens/Product";
import Hotselling from "./components/screens/Hotselling";
import Order from "./components/screens/Order";
import Payment from "./components/screens/Payments";
import Setting from "./components/screens/Settings";
// import Header from "./components/screens/Header/Header";

// import Index from "./pages/Index";
// Routes, Route

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route exact path="/" element={<Spotlight />} />
            <Route exact path="*" element={<PageNotFound />} />

            <Route exact path="/summary" element={<Summary />} />

            <Route exact path="/product" element={<Product />} />

            <Route exact path="/hotselling" element={<Hotselling />} />

            <Route exact path="/order" element={<Order />} />

            <Route exact path="/payment" element={<Payment />} />

            <Route exact path="/settings" element={<Setting />} />

            {/* <Header /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

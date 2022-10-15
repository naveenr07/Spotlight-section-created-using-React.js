import "./App.css";
import Spotlight from "./components/screens/Spotlight";
import { BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./components/screens/PageNotFound";
import Summary from "./components/screens/Summary";
import Product from "./components/screens/Product";
import Hotselling from "./components/screens/Hotselling";
import Order from "./components/screens/Order";
import Payment from "./components/screens/Payments";
import Setting from "./components/screens/Settings";

import Index from "./pages/Index";

function App() {
  return (
    <>
      <Router>
        {/* <Routes> */}
        {/* <Route exact path="/" element={<Spotlight />} />

          <Route exact path="*" element={<PageNotFound />} />

          <Route exact path="/summary" element={<Summary />} />

          <Route exact path="/product" element={<Product />} />

          <Route exact path="/hotselling" element={<Hotselling />} />

          <Route exact path="/order" element={<Order />} />

          <Route exact path="/payment" element={<Payment />} />

          <Route exact path="/settings" element={<Setting />} /> */}
        {/* <Route exact path="/" element={<NavBar />} />
          <Route exact path="/" element={<Sidebar />} /> */}
        <Index />
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;

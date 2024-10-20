import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Nav from "./components/MainPage/Nav";
import Header from "./components/MainPage/Header";
import Search from "./components/MainPage/Search";
import Buttons from "./components/MainPage/Buttons";
import PlantsList from "./components/MainPage/PlantsList";
import PlantItems from "./components/MainPage/PlantItems";
import PlantsFooter from "./components/MainPage/PlantsFooter";
import Cart from "./components/MainPage/Cart"; // Assuming Cart component exists

function Layout() {
  const location = useLocation(); // Get the current route path
  const isCartPage = location.pathname === "/cart"; // Check if the current path is "/cart"

  return (
    <div className="App">
      {/* Only show Nav and Header on non-cart pages */}
      {!isCartPage && <Nav />}
      {!isCartPage && <Header />}

      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <Search />
              <Buttons />
              <PlantsList />
              <PlantItems />
            </>
          }
        />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Only show the footer on non-cart pages */}
      {!isCartPage && <PlantsFooter />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

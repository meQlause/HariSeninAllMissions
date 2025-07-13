import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { HomePage } from "./pages/home";
import { ProductsPage } from "./pages/products";
import { ProductsDetailsPage } from "./pages/produtcsDetails";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/register" Component={RegisterPage}></Route>
        <Route path="/products" Component={ProductsPage}></Route>
        <Route path="/product-details" Component={ProductsDetailsPage}></Route>
      </Routes>
    </Router>
  );
};

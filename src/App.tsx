import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { HomePage } from "./pages/home";
import { ProductsPage } from "./pages/products";
import { ProductsDetailsPage } from "./pages/produtcsDetails";
import { ScrollToTop } from "./services/scrollToTop";
import { paymentMethodPage } from "./pages/paymentMethod";
import { paymentPage } from "./pages/payment";
import { paymentCompletePage } from "./pages/paymentComplete";
import { ResetPaymentLayout } from "./layouts/resetPayment";

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<ResetPaymentLayout />}>
          <Route path="*" Component={HomePage}></Route>
          <Route path="/login" Component={LoginPage}></Route>
          <Route path="/register" Component={RegisterPage}></Route>
          <Route path="/products" Component={ProductsPage}></Route>
          <Route path="/product-details/:id" Component={ProductsDetailsPage}></Route>
        </Route>
        <Route path="/select-payment-method/:id" Component={paymentMethodPage}></Route>
        <Route path="/payment/:payment/:id" Component={paymentPage}></Route>
        <Route path="/payment-completed" Component={paymentCompletePage}></Route>
      </Routes>
    </Router>
  );
};

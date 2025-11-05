import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./context/CartProvider";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import LivePreview from "./pages/livepreview/LivePreview";
import BuyThemes from "./pages/buythemes/BuyThemes";
import Cart from "./pages/cart/Cart";
import RedirectAuthenticatedUser from "./routes/RedirectAuthenticatedUser";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import PaymentSuccess from "./pages/success/PaymentSuccess";
import { Navigate } from "react-router-dom";
import Verify from "./pages/verify/Verify";
import { ImSpinner3 } from "react-icons/im";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import RedirectVerifiedUsers from "./routes/RedirectVerifiedUsers";
function App() {
  const { checkAuth, user, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  window.onload = () => {
    console.log(user);
  };

  if (isCheckingAuth)
    return (
      <section className="w-full h-full flex justify-center items-center">
        <div className="w-12 h-12 text-black">
          <ImSpinner3 className="animate-spin" />
        </div>
      </section>
    );

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/live" element={<LivePreview />} />
            <Route path="/buy" element={<BuyThemes />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <PaymentSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <RedirectAuthenticatedUser>
                  <Signup />
                </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectAuthenticatedUser>
                  <Login />
                </RedirectAuthenticatedUser>
              }
            />

            <Route
              path="/verify"
              element={
                <RedirectVerifiedUsers>
                  <Verify />
                </RedirectVerifiedUsers>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <RedirectAuthenticatedUser>
                  <ForgotPassword />
                </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/reset-password/:token"
              element={
                <RedirectAuthenticatedUser>
                  <ResetPassword />
                </RedirectAuthenticatedUser>
              }
            />

            <Route path="/*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

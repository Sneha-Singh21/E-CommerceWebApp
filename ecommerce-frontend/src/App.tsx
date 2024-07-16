import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// here we are using lazy loading to load pages only when needed..
import { lazy, Suspense } from "react";
import Loader from "./components/loader.tsx";

const Home = lazy(() => import("./pages/home.tsx"));
const Search = lazy(() => import("./pages/search.tsx"));
const Cart = lazy(() => import("./pages/cart.tsx"));

const App = () => {
  return (
    <Router>
      {/* Header */}

      {/* Basically suspense is used when we want to display something during the page loads */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

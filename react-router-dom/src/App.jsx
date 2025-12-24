import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav style={styles.nav}>
        <NavLink to="/home" style={styles.link}>Home</NavLink>
        <NavLink to="/aboutus" style={styles.link}>About Us</NavLink>
        <NavLink to="/todos" style={styles.link}>Todos</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Redirect root to home */}
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#222",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default App;

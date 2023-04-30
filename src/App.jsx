import "./App.css";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
// import Footer from "./pages/Footer/Footer";


function App() {
  return (
    <>
     

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path='/' element={<Footer/>}   /> */}
      </Routes>
    </>
  );
}

export default App;

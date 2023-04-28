import "./App.css";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import FollowComponent from "./Components/FollowComponent/Follow";
import Trend from "./Components/Trends/Trend";
import Search from "./Components/Search/Search";

function App() {
  return (
    <>
      <Search />
      <Trend />
      <FollowComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

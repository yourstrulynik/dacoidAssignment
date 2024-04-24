import { Route, Routes } from "react-router-dom";
import WelcomeOne from "./pages/WelcomeOne";
import WelcomeTwo from "./pages/WelcomeTwo";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Goals from "./pages/Goals";
import Calendar from "./pages/Calendar";
import Chart from "./pages/Chart";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeOne />} />
        <Route path="/welcomeTwo" element={<WelcomeTwo />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/chart" element={<Chart />} />
      </Routes>
    </>
  );
}

export default App;

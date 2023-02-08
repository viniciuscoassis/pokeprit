import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";
import HomePage from "./pages/DashBoard/Home/HomePage";
import PokemonSelectionPage from "./pages/DashBoard/PokemonSelection/PokemonSelection";
import DateSelectionPage from "./pages/DashBoard/DateSelection/DateSelection";
import TimeSelectionPage from "./pages/DashBoard/TimeSelection/TimeSelection";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="home" element={<HomePage />} />
            <Route path="selection" element={<PokemonSelectionPage />} />
            <Route path="day" element={<DateSelectionPage />} />
            <Route path="hour" element={<TimeSelectionPage />} />
            <Route index path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

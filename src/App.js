import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";
import HomePage from "./pages/DashBoard/Home/HomePage";
import PokemonSelectionPage from "./pages/DashBoard/PokemonSelection/PokemonSelection";
import DateSelectionPage from "./pages/DashBoard/DateSelection/DateSelection";
import ReviewPage from "./pages/DashBoard/ReviewSchedule/ReviewPage";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="home" element={<HomePage />} />
            <Route path="fighters" element={<PokemonSelectionPage />} />
            <Route path="day" element={<DateSelectionPage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route index path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

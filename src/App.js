import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard/Dashboard";
import HomePage from "./pages/DashBoard/Home/HomePage";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route path="home" element={<HomePage />} />
            <Route index path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

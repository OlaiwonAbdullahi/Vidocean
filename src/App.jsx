import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Index from "./pages/Index";
const App = () => {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

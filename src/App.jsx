import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Index from "./pages/Index";
import AuthProvider from "./context/AuthProvider";
import PlayingVideo from "./components/PlayingVideo";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<SignUp />} />
            <Route path="/index" element={<Index />} />
            <Route path="/search:searchQuery" element={<Search />} />
            <Route path="/playing:id" element={<PlayingVideo />} />
            {/* Redirect to the login page if no match is found */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;

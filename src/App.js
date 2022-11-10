import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import { GoogleOAuthProvider } from '@react-oauth/google';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "./pages/register/Register";


//client_id: 590295516722-4ka8s73md7hfg0l80ei3dnkj8flmm576.apps.googleusercontent.com
function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<GoogleOAuthProvider clientId="590295516722-4ka8s73md7hfg0l80ei3dnkj8flmm576.apps.googleusercontent.com"><Login /></GoogleOAuthProvider>} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

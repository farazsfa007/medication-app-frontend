import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PatientDashboard from "./components/PatientDashboard";
import CaretakerDashboard from "./components/CaretakerDashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
                <Route path="/caretaker-dashboard" element={<CaretakerDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;

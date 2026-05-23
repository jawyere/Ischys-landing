import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import FoundingPatron from "./pages/FoundingPatron/FoundingPatron";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" replace />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/founding-patron" element={<FoundingPatron />} />
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
}

export default App;
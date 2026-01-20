import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRenderer from "./pages/PageRenderer";
import { ConfigProvider } from "./context/ConfigContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ConfigProvider>
      <Router>
         <Navbar />   
        <Routes>
          <Route path="*" element={<PageRenderer />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;

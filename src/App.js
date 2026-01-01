import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovPreview from "./pages/MovPreview";
import Search from "./pages/Search";
import css from "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/preview/:id" element={<MovPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

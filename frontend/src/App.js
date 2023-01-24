import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/chat" element={<Chat exact />} />
      </Routes>
    </div>
  );
}

export default App;

import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { useContext } from "react";
import { useSetLoadingContext } from "./context/LoadingContext";
import Loading from "./pages/Loading";

function App() {
  const { loading } = useSetLoadingContext();

  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

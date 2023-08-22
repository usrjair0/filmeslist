import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import MovielDetail from "./pages/MovieDetail/MovielDetail.jsx";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="app" style={{ backgroundColor: "#302020"}}>
      <Header onSubmit={(inputValue)=> setSearchValue(inputValue)}/>
      <Routes>
        <Route path="/" element={<Home searchValueprop = {searchValue}/>}/>
        <Route path="/movie/:id" element={<MovielDetail />}/>
      </Routes>
    </div>
  )
}

export default App

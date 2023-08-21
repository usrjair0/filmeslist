import { Outlet } from "react-router-dom";
import Header from './components/Header/Header.jsx'

function App() {
  return (
    <div className="app" style={{ backgroundColor: "#302020"}}>
      <Header />
      <Outlet />
    </div>
  )
}

export default App

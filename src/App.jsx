import { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navigation from "../Navigation/Navigation"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
    <div className="page__content">Hello</div>
    <Navigation />
    </div>
  )
}

export default App

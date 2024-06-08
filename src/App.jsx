import { useState } from 'react'
import Todo from './components/Todo'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  )
}

export default App

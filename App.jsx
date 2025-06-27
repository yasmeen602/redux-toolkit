import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./components/counter";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-4xl font-bold mb-4 text-[#13072E]" >Unified mentor</h1>
     <Counter />
    </>
  );
}

export default App;
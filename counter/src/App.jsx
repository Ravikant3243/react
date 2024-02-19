
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import { useState } from 'react'
function App() {
 let [val,setVal]=useState(0);

 const addVal=()=>{
   val=val+1;
      setVal(val)
      
 }
  const removeVal=()=>{
     val=val-1;
      setVal(val);
  }
  return (
    <>
     <h1>Ravikant and React</h1>
     <h2>Counter Value :{val}</h2>
      <button onClick={addVal}>Add value</button>
      <br />
      <button onClick={removeVal}>Remove value </button>
    </>
  )
}

export default App

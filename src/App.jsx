import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [plazo, setPlazo] = useState(6);
  
  

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <Form 
        cantidad = {cantidad}
        setCantidad = {setCantidad}
        plazo = {plazo}
        setPlazo = {setPlazo}
      />
    </div>
  )
}


export default App

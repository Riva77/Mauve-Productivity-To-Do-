import "./App.css"
import Start from "./pages/Start"
import Finish from "./pages/Finish"
import Display from "./pages/Display"
import { Route, Routes,} from "react-router-dom"


const App = () => {

  return (
    <div>
      <Routes>
      <Route path="/" element={ <Start/>} />
      <Route path="finish" element={ <Finish/>} />
      <Route path="display" element={ <Display/>} />   
      </Routes>

    </div>
  )
}

export default App
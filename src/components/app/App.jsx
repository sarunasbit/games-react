import {Routes, Route} from "react-router-dom"
import Home from "../home/Home"
import ResultsPage from "../resultsPage/ResultsPage"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/results" element={<ResultsPage/>}/>
    </Routes>
  )
}

export default App

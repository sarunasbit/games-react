import {Routes, Route} from "react-router-dom"
import Home from "../home/Home"
import SearchPage from "../searchPage/SearchPage"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes>
  )
}

export default App

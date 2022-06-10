import React from "react"
import {Route, Routes} from "react-router-dom"
import AddUser from "../components/AddUser"
import ListUser from "../components/ListUser"
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListUser/>}/>
        <Route path="/user/add" element={<AddUser/>}/>
      </Routes>
    </div>
  )
}

export default App

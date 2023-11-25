import { Routes,Route } from "react-router-dom"
import Home from "../Component/Home"
import Register from "../Component/Register"
import Login from "../Component/Login"

function AllRoute(){
    return(
        <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />

        </Routes>
        </div>
    )
}
export default AllRoute
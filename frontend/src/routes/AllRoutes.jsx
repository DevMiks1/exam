import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"

const AllRoutes = () => {
  return (
    <div >
        <Routes>
            <Route path="/" element={<Home />}>

            </Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
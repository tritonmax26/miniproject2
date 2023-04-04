import React from "react"
import { Routes, Route } from "react-router-dom"
import routes from "./routes"
import NavbarMain from "./components/NavbarMain"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <NavbarMain/>      
        <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
import Home from "./views/Home"
import Movies from "./views/Movies"
import Contact from "./views/Contact"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movies",
    element: <Movies />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]

export default routes


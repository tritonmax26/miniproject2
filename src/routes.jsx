import Home from "./views/Home"
import Classic from "./views/Movies"
import Contact from "./views/Contact"
import SearchMovie from "./views/SearchMovie"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/movies",
    element: <Classic />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/searchmovie",
    element: <SearchMovie />
  }

]

export default routes


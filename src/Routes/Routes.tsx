import React from "react"
import { Route, Routes as ReactRouterRoutes } from "react-router-dom"

import Todo from "Pages/Todo"
import Home from "Pages/Home"
import About from "Pages/About"
import Error from "Pages/Error"

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="*" element={<Error />} />
    </ReactRouterRoutes>
  )
}

export default Routes

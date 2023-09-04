import TaskList from "components/organisms/TaskList"
import TodoForm from "components/organisms/TodoForm"
import React from "react"
import { Route, Routes as ReactRouterRoutes } from "react-router-dom"

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<h2>Homepage</h2>}></Route>
      <Route
        path="/tasklist"
        element={
          <>
            <TodoForm />
            <TaskList />
          </>
        }
      ></Route>
      <Route path="/about" element={<h2>About</h2>}></Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </ReactRouterRoutes>
  )
}

export default Routes

import React from "react"
import TaskList from "components/templates/TaskList"
import TodoForm from "components/templates/TodoForm"

const Todo: React.FC = () => {
  return (
    <>
      <TodoForm />
      <TaskList />
    </>
  )
}

export default Todo

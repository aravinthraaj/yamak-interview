// TaskList.tsx
import React, { useEffect } from "react"
import { useTaskStore } from "../src/store/todoStore"
import TodoForm from "./components/organisms/TodoForm/TodoForm"

const New: React.FC = () => {
  const { tasks, toggleTask, removeTask } = useTaskStore((state: any) => state)

  useEffect(() => {
    console.log("TaskList component updated")
  })

  return (
    <div>
      <h1>Task List</h1>
      <TodoForm />
      <ul>
        {tasks.map((task: any) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isComplete}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.isComplete ? "line-through" : "none",
              }}
            >
              {task.text} ({task.priority})
            </span>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default New

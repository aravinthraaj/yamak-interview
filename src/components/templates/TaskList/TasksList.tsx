import React, { useEffect } from "react"

import "./TaskList.scss"
// import 'global.scss'

import { useTaskStore } from "store/todoStore"

import Button from "components/atoms/Button"
import Checkbox from "components/atoms/Checkbox"

const TaskList: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const toggleTask = useTaskStore((state) => state.toggleTask)
  const removeTask = useTaskStore((state) => state.removeTask)

  useEffect(() => {
    console.log("TaskList component updated")
  })

  return (
    <div className="taskList">
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <Checkbox
              onChange={() => toggleTask(task.id)}
              checked={task.isComplete}
            />
            <div className="task">
              <span className={task.isComplete ? "strike" : ""}>
                {task.text} ({task.priority})
              </span>
            </div>
            <Button
              variant="remove"
              onClick={() => removeTask(task.id)}
              className="button"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList

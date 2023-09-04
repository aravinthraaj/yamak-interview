import React, { useEffect } from "react"
import { useTaskStore } from "store/todoStore"
import Button from "components/atoms/Button"

import "./TaskList.scss"
import Checkbox from "components/atoms/Checkbox"

const TaskList: React.FC = () => {
  const { tasks, toggleTask, removeTask } = useTaskStore((state: any) => state)

  useEffect(() => {
    console.log("TaskList component updated")
  })

  return (
    <div className="taskList">
      <ul>
        {tasks.map((task: any) => (
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

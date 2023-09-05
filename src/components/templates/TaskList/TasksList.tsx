import React, { useEffect, useState } from "react"

import "./TaskList.scss"
// import 'global.scss'

import { useTaskStore } from "store/todoStore"

import Button from "components/atoms/Button"
import Checkbox from "components/atoms/Checkbox"
import Toast from "components/atoms/Toast"

const TaskList: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const toggleTask = useTaskStore((state) => state.toggleTask)
  const removeTask = useTaskStore((state) => state.removeTask)
  const [showremoveToast, setRemoveToast] = useState(false)

  useEffect(() => {
    console.log("TaskList component updated")
  }, [tasks])

  const handleToastHide = () => {
    setRemoveToast(false)
  }

  const removeHandler = (id: string) => {
    removeTask(id)
    setRemoveToast(true)
  }

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
              onClick={() => removeHandler(task.id)}
              className="button"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      {showremoveToast && (
        <Toast
          message="Task removed"
          duration={5000}
          onHide={handleToastHide}
          color="orange"
        />
      )}
    </div>
  )
}

export default TaskList

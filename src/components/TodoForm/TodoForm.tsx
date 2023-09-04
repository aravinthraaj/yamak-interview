import React, { useState, useEffect } from "react"
import Select from "../Select/Select"
import Button from "../Button/Button"
import Toast from "../Toast/Toast"

interface Task {
  id: number
  text: string
  isComplete: boolean
  priority: string
}

const TodoForm = () => {
  const options: string[] = ["low", "medium", "high"]
  const [tasks, setTasks] = useState<Task[]>([])
  const [text, setText] = useState("")
  const [priority, setPriority] = useState("low")
  const [showToast, setShowToast] = useState(false)

  const handleToastHide = () => {
    setShowToast(false)
  }

  const handleSelectChange = (selectedOption: string) => {
    setPriority(selectedOption)
    console.log(`Selected option: ${selectedOption}`)
  }
  const addTask = () => {
    if (text) {
      const newTask: Task = {
        id: new Date().getTime(),
        text,
        isComplete: false,
        priority,
      }
      setTasks([...tasks, newTask])
      setText("")
    } else {
      setShowToast(true)
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        addTask()
      }}
    >
      <input
        type="text"
        placeholder="Task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Select
        options={options}
        defaultValue={options[0]}
        onChange={handleSelectChange}
      />
      <Button variant="add" type="submit">
        Add
      </Button>
      {showToast && (
        <Toast
          message="Task cannot be empty"
          duration={5000}
          onHide={handleToastHide}
        />
      )}
    </form>
  )
}

export default TodoForm

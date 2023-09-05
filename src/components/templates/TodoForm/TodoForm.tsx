import React, { useState } from "react"

import Select from "components/atoms/Select"
import Button from "components/atoms/Button"
import Toast from "components/atoms/Toast"
import Input from "components/atoms/Input"

import { useTaskStore } from "store/todoStore"

import "./TodoForm.scss"
// import 'global.scss'

const TodoForm: React.FC = () => {
  const options: string[] = ["low", "medium", "high"]

  const [text, setText] = useState("")
  const [priority, setPriority] = useState("low")
  const [showToast, setShowToast] = useState(false)
  const addTask = useTaskStore((state) => state.addTask)

  const handleToastHide = () => {
    setShowToast(false)
  }

  const handleSelectChange = (selectedOption: string) => {
    setPriority(selectedOption)
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text) {
      addTask(text, priority)
      setText("")
    } else {
      setShowToast(true)
    }
  }

  return (
    <form onSubmit={onFormSubmit} className="form">
      <Input label="Task" value={text} onChange={setText} />
      <div className="controls">
        <Select
          options={options}
          defaultValue={options[0]}
          onChange={handleSelectChange}
        />
        <Button variant="add" type="submit">
          Add
        </Button>
      </div>
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

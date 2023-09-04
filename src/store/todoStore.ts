// store.ts
import { create } from "zustand"
import Cookies from "js-cookie"

interface Task {
  id: string
  text: string
  isComplete: boolean
  priority: string
}

type TaskState = {
  tasks: Task[]
  addTask: (text: string, priority: string) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}

const getInitialTasks = (): Task[] => {
  const cookieData = Cookies.get("tasks")
  return cookieData ? JSON.parse(cookieData) : []
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: getInitialTasks(),
  addTask: (text, priority) => {
    set((state) => {
      const updatedTasks = [
        ...state.tasks,
        { id: Date.now().toString(), text, isComplete: false, priority },
      ]
      Cookies.set("tasks", JSON.stringify(updatedTasks))
      return { tasks: updatedTasks }
    })
  },
  toggleTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
      Cookies.set("tasks", JSON.stringify(updatedTasks))
      return { tasks: updatedTasks }
    })
  },
  removeTask: (id) => {
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id)
      Cookies.set("tasks", JSON.stringify(updatedTasks))
      return { tasks: updatedTasks }
    })
  },
}))

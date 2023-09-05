interface Task {
  id: string
  text: string
  isComplete: boolean
  priority: string
}

interface TaskState {
  tasks: Task[]
  addTask: (text: string, priority: string) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}
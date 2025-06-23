import { create } from 'zustand'

type Task = {
  id: string
  title: string
  completed: boolean
}

type TaskState = {
  tasks: Task[]
  addTask: (title: string) => void
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: crypto.randomUUID(), title, completed: false },
      ],
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}))

export {}

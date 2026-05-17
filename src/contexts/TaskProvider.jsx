import { useCallback, useEffect, useMemo, useState } from 'react'
import { TaskContext } from './TaskContext'
import { useAuth } from './AuthContext'

function TaskProvider({ children }) {
  const { isAuth } = useAuth()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (!isAuth) {
      setTasks([])
    }
  }, [isAuth])

  const addTask = useCallback((task) => {
    setTasks((prev) => [task, ...prev])
  }, [])

  const updateTaskInState = useCallback((taskId, updates) => {
    setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, ...updates } : task)))
  }, [])

  const removeTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }, [])

  const taskValue = useMemo(
    () => ({ tasks, setTasks, addTask, updateTask: updateTaskInState, removeTask }),
    [tasks, addTask, updateTaskInState, removeTask],
  )

  return <TaskContext.Provider value={taskValue}>{children}</TaskContext.Provider>
}

export default TaskProvider
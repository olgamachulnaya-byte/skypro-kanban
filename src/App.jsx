import AppRoutes from './components/AppRoutes/AppRoutes'
import AuthProvider from './contexts/AuthProvider'
import TaskProvider from './contexts/TaskProvider'
import ThemeProvider from './contexts/ThemeProvider'

function App() {
  return (
       <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

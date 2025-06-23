import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Tasks from './pages/Tasks'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { ThemeProvider } from './ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </ThemeProvider>
  )
}

export default App

import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <nav style={{
      backgroundColor: '#fbb6ce',
      padding: '1rem',
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      fontWeight: 'bold'
    }}>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/favorites">Favoriler</Link>
      <Link to="/tasks">Notlar</Link>
      <Link to="/about">Hakkında</Link>
      <button onClick={toggleTheme} className="theme-toggle-btn">
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  )
}

export default Navbar

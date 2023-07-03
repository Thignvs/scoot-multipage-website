import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <nav>
          <NavBar />
        </nav>
        <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App

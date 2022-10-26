import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
      </Routes>
    </Router>
  )
}

export default App

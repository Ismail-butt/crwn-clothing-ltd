import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import Shop from './pages/shop/Shop'
import CheckOut from './pages/CheckOut/CheckOut'
import { checkUserSession } from './store/user/userActions'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </Router>
  )
}

export default App

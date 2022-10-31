import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import Shop from './pages/shop/Shop'
import CheckOut from './pages/CheckOut/CheckOut'
import { UserProvider } from './contexts/UserContext'
import { CategoriesProvider } from './contexts/CategoriesContext'
import { CartProvider } from './contexts/CartContext'

const App = () => {
  return (
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Authentication />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/checkout' element={<CheckOut />} />
            </Routes>
          </Router>
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  )
}

export default App

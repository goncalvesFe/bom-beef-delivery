import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pages from './pages'

function AppRoutes() {
  const { Home, Login, Register } = Pages

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

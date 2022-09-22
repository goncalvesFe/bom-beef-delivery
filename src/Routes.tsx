import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pages from './pages'

function AppRoutes() {
  const { Home, Login } = Pages

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

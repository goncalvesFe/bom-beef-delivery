import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pages from './pages'

function AppRoutes() {
  const { Home } = Pages

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

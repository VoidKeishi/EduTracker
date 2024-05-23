import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Layout from './pages/Layout'
import KPI from './pages/KPI'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ForgotPassword/ResetPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/' element={<Layout />}>
          <Route path='/kpi' element={<KPI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

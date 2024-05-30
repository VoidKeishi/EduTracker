import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Layout from './pages/Layout'
import KPI from './pages/KPI'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ForgotPassword/ResetPassword'
import KPIDetail from './pages/KPI/KPIDetail'
import AddKPI from './pages/KPI/AddKPI'
import Task from './pages/Task'
import Setting from './pages/Setting'
import Account from './pages/Account'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='kpi' element={<Layout />}>
          <Route path='' element={<KPI />} />
          <Route path='detail' element={<KPIDetail />} />
          <Route path='add' element={<AddKPI />} />
        </Route>
        <Route path='task' element={<Task />} />
        <Route path='setting' element={<Setting />} />
        <Route path='account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

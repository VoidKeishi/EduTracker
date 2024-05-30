import {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Layout from './pages/Layout'
import KPI from './pages/KPI'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/ForgotPassword/ResetPassword'
import CreateKpi from './pages/KPI/pages/CreateKpi'
import KpiGeneral from './pages/KPI/pages/KpiGeneral'
import Task from './pages/Task'
import GeneralSettings from './pages/Settings/pages/GeneralSettings'
import ProfileSettings from './pages/Settings/pages/ProfileSettings'
import KPIDetail from './pages/KPI/pages/KPIDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/' element={<Layout />}>
          <Route path='/kpi' element={<KPI />}>
            <Route path='' element={<KpiGeneral />} />
            <Route path='create-kpi' element={<CreateKpi />} />
            <Route path='details' element={<KPIDetail />} />

          </Route>
          <Route path='/task' element={<Task />} />
          <Route path='/account' element={<ProfileSettings />} />
          <Route path='/settings' element={<GeneralSettings />} />         
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

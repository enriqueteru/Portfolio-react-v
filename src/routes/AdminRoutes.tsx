import { Route, Routes } from 'react-router'
import AdminDashboard from '../admin/AdminDashboard'
import NotFound404 from '../core/NotFound404'

const AdminRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<AdminDashboard />} />
    <Route path="/*" element={<NotFound404 />} />
    </Routes>
  )
}

export default AdminRoutes

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegistrationHandler from './pages/common/registration/RegistrationHandler'
import LoginHandler from './pages/common/login/LoginHandler'
import SupplierHandler from './pages/supplier/home/SupplierHandler'
import AddProductsHandler from './pages/supplier/products/AddProductsHandler'
import UniqueProduct from './pages/supplier/products/UniqueProduct'
import UniqueProductHandler from './pages/supplier/products/UniqueProductHandler'
import TopSideNav from './components/TopSideNav/TopSideNav'
import ProfileHandler from './pages/common/profile/ProfileHandler'
import AuthContext from './components/Authentication/AuthContext'
import CustomerHome from './pages/customer/home/CustomerHome'
import CustomerHandler from './pages/customer/home/CustomerHandler'

const AppRoutes = () => {

  return (
   <BrowserRouter>
   <AuthContext>
   <Routes>
    <Route path="/" element={<LoginHandler/>}></Route>
    <Route path="/registration" element={<RegistrationHandler/>}></Route>
    <Route path="/supplier-home" element={<TopSideNav><SupplierHandler/></TopSideNav>}></Route>
    <Route path="/add-product" element={<TopSideNav><AddProductsHandler/></TopSideNav>}></Route>
    <Route path="/products/:_id" element={<TopSideNav><UniqueProductHandler/></TopSideNav>}></Route>
    <Route path="/profile" element={<TopSideNav><ProfileHandler/></TopSideNav>}></Route>
    <Route path="/customer-home" element={<TopSideNav><CustomerHandler/></TopSideNav>}></Route>
   </Routes>
   </AuthContext>
   </BrowserRouter>
  )
}

export default AppRoutes

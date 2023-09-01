import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from './pages/Home'
import "./index.css"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import ProductList from "./pages/ProductList";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="flex mt-2">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/users',
        element: <UserList />
      },
      {
        path: '/user/:userId',
        element: <User />
      },
      {
        path: '/newUser',
        element: <NewUser />
      },
      {
        path: '/products',
        element: <ProductList />
      },
      {
        path: '/product/:productId',
        element: <Product />
      },
      {
        path: '/newProduct',
        element: <NewProduct />
      },
    ],
  },

  {
    path: '/login',
    element: <Login />
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

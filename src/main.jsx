import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import { router } from './Routes/Routes.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component : Navbar
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

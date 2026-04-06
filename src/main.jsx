import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routing/appRouter.jsx'
import { CartProvider } from './utils/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router}/>
  </CartProvider>
)
  
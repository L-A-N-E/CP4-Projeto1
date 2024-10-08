import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Contato from './routes/Contato.jsx'

import { GlobalStyle } from './styles/GlobalStyle.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,

    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/produtos',
        element:<Produtos/>
      },
      {
        path:'/sobre',
        element:<Sobre/>
      },
      {
        path:'/contato',
        element:<Contato/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
    <GlobalStyle/>
  </StrictMode>,
)

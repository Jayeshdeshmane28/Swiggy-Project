import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Body from './Component/Body'
import { Outlet } from 'react-router'
import useOnline from './utils/useOnline'
import OfflineBackDrop from './Component/OfflineBackDrop'

function App() {
let OnlineStatus=useOnline()
  return (
    <>
    {!OnlineStatus && <OfflineBackDrop/>}
     {/* When the user is offline (onlineStatus is false), the OfflineBackdrop component is rendered.
        When the user is online (onlineStatus is true), nothing is rendered. */}

   <Header/>
   <Outlet/>
   {/* outlet can take 3 possible values body About Contact component */}
   <Footer/>
    </>
  )
}

export default App

import React from 'react'
import { Toaster, toast } from 'react-hot-toast'

// Components
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {

  return (
    <div>
        
        <Navbar />

        <main>
            {children}
        </main>

        <Footer />

        <Toaster position="top-center" />
      
    </div>
  )
}

export default Layout

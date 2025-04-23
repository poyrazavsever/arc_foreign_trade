import React from 'react'
import { Toaster, toast } from 'react-hot-toast'

const Layout = ({children}) => {

  return (
    <div>

        <main>
            {children}
        </main>

        <Toaster position="top-center" />
      
    </div>
  )
}

export default Layout

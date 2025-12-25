import React, { Children } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <Nav/>
            <main>{children}</main>
        <Sidebar/>
        <Footer/>
    </div>
  )
}

export default Layout
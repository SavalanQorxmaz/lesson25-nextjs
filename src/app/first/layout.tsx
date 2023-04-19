

import React from 'react'
import FirstHeader from './firstHeader/page'

const Layout = ({children,}:{children:React.ReactNode}) => {
  return (
    <>
    <FirstHeader/>
        {children}
    </>
  )
}

export default Layout
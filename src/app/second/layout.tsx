
import React from 'react'
import SecondHeader from './secondHeader/page'

const SecondLayout = ({children,}:{children:React.ReactNode}) => {
  return (
    <>
<SecondHeader/>
        {children}
    
    </>
  )
}

export default SecondLayout
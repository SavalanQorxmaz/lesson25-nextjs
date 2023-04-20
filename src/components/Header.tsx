import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-20'>
        <div className='h-20 bg-green-700 fixed top-0 left-0 w-full [&>*]:ml-5'>
            <Link href={'/first'}>First</Link>
            <Link href={'/second'}>Second</Link>
        </div>
    </div>
  )
}

export default Header
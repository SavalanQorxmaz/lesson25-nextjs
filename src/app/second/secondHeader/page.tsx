
import React from 'react'
import Link from 'next/link'

const SecondHeader = () => {
  return (
    <div className='h-20'>
      <div className='h-20 fixed top-0 left-0 w-full bg-red-200 [&>*]:mr-5' >
      <Link href={'/'}>Home</Link>
      <Link href={'/second'}>SEcond</Link>
        <Link href={'/second/second-first'}>SEcond First</Link>
        <Link href={'/first'}>First</Link>
      </div>
    </div>
  )
}

export default SecondHeader
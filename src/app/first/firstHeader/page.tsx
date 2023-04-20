

import React from 'react'
import Link from 'next/link'

const FirstHeader = () => {
  return (
    <div className='h-20'>
      <div className='h-20 bg-yellow-400 fixed top-0 left-0 w-full'>
<Link href={'/'}>Home</Link>
<Link href={'/first'}>First</Link>
<Link href={'/first/first-first'}>First First</Link>
<Link href={'/second'}>Second</Link>
      </div>
    </div>
  )
}

export default FirstHeader
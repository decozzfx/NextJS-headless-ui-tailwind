import { Transition } from '@headlessui/react'
import { useState } from 'react'

export default function MyComponent() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div className='flex items-center justify-center h-screen'>
      <Transition
        show={isShowing} enter='transition duration-1000'
        enterFrom='opacity-0 scale-0 rotate-90'
        enterTo='opacity-100 scale-100 rotate-0'
      >
        <img src="/twitter.svg" className='h-40'/>
      </Transition>
      <button onClick={() => setIsShowing(!isShowing)}>Animation</button>
    </div>
  )
}
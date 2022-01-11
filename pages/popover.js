import { Popover, Transition } from '@headlessui/react'

export default function MyPopover() {
  return (
    <div className="flex h-screen items-center justify-center">
    <Popover className="relative">
      <Popover.Button className='bg-indigo-500 rounded text-white py-2 px-3'>Solutions</Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 w-96 bg-violet-400 rounded">
          <div className="flex flex-wrap">
            <div className="w-6/12 p-4 border-r border-white/60 ">
              <a className='block text-white mt-1' href="/analytics">Analytics</a>
              <a className='block text-white mt-1' href="/engagement">Engagement</a>
              <a className='block text-white mt-1' href="/security">Security</a>
              <a className='block text-white mt-1' href="/integrations">Integrations</a>
            </div> 
            <div className="w-6/12 p-4"> 
              <a className='block text-white mt-1' href="/analytics">Analytics</a>
              <a className='block text-white mt-1' href="/engagement">Engagement</a>
              <a className='block text-white mt-1' href="/security">Security</a>
              <a className='block text-white mt-1' href="/integrations">Integrations</a>
            </div>
          </div>      
        </Popover.Panel>
      </Transition>
    </Popover>
    </div>
  )
}
import { Disclosure, Transition } from '@headlessui/react'

export default function MyDisclosure() {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <Disclosure as='div' className='border border-gray-300 p-2 rounded w-96'>
        {({open}) => (
          <>
            <Disclosure.Button className={`py-2 w-full text-left rounded px-4 ${open ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black' }`}>  
              Is team pricing available?
            </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Disclosure.Panel className="text-gray-600 mt-2">
                  Yes! You can purchase a license that you can share with your entire
                  team.
                </Disclosure.Panel>
              </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='border border-gray-300 p-2 rounded w-96'>
        {({open}) => (
          <>
            <Disclosure.Button className={`py-2 w-full text-left rounded px-4 ${open ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black' }`}>  
              Is team pricing available?
            </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Disclosure.Panel className="text-gray-600 mt-2">
                  Yes! You can purchase a license that you can share with your entire
                  team.
                </Disclosure.Panel>
              </Transition>
          </>
        )}
      </Disclosure>
      <Disclosure as='div' className='border border-gray-300 p-2 rounded w-96'>
        {({open}) => (
          <>
            <Disclosure.Button className={`py-2 w-full text-left rounded px-4 ${open ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black' }`}>  
              Is team pricing available?
            </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-100 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Disclosure.Panel className="text-gray-600 mt-2">
                  Yes! You can purchase a license that you can share with your entire
                  team.
                </Disclosure.Panel>
              </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={() => setIsOpen(true)}>Modal Open</button>

      <Transition
        as={Fragment}
        show={isOpen}
        enter='transition'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
      <Dialog as='div' className='fixed inset-0 flex items-center justify-center' open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Overlay className='fixed inset-0 bg-black/50' />

      <div className='bg-white p-8 rounded z-10 shadow-xl'>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>
        <button className='py-2 px-4 bg-blue-50 rounded text-blue-500 mt-2' onClick={() => setIsOpen(false)}>Close</button>
      </div>
      </Dialog>
      </Transition>
    </div>
  )
}
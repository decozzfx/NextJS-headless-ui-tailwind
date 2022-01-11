import { Tab } from '@headlessui/react'

export default function MyTabs() {
  return (
   <div className='p-10'>
    <Tab.Group as='div' className='border border-gray-300 p-6 rounded' >
      <Tab.List>
        <Tab className= {({ selected }) => `${selected ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'} py-2 px-6 rounded`}>Home</Tab>
        <Tab className= {({ selected }) => `${selected ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'} py-2 px-6 rounded`}>Profile</Tab>
        <Tab className= {({ selected }) => `${selected ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-500'} py-2 px-6 rounded`}>Contact</Tab>
      </Tab.List>
      <Tab.Panels className='mt-4'>
        <Tab.Panel>Home Content</Tab.Panel>
        <Tab.Panel>Profile Content</Tab.Panel>
        <Tab.Panel>Contact Content</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   </div> 
  )
}
import { Listbox } from "@headlessui/react";
import { useState } from "react";



export default function ListboxPage(){
    const [selectedItem, setSelectedItem] = useState(1)
    return(
        <div className="flex items-center justify-center h-screen">
            <Listbox as='div' className='relative' onChange={(value) => setSelectedItem(value)}>
                <Listbox.Button className='flex items-center border border-gray-500 rounded px-4 py-2 hover:bg-blue-400'>
                Choose Country : {selectedItem}
                <div className="flex">
                    <img src="/chevron-down.svg" className="ml-3 bg-indigo-600"/>
                </div>
                </Listbox.Button>
                <Listbox.Options className='absolute w-56 rounded mt-2 border border-gray-300'>
                    <Listbox.Option value='1' className='py-2 px-4 hover:bg-gray-100 cursor-pointer' >Indonesia</Listbox.Option>
                    <Listbox.Option value='2' className='py-2 px-4 hover:bg-gray-100 cursor-pointer' >Malaysia</Listbox.Option>
                    <Listbox.Option value='3' className='py-2 px-4 hover:bg-gray-100 cursor-pointer' >Philipina</Listbox.Option>
                    <Listbox.Option value='4' className='py-2 px-4 hover:bg-gray-100 cursor-pointer' >Laos</Listbox.Option>
                </Listbox.Options>
            </Listbox>
        </div>
    )
}
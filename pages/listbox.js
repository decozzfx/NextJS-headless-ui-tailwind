import { Listbox } from "@headlessui/react";
import { useState } from "react";

const countries = [
    {
        id : '1',
        name : 'Indonesia'
    },
    {
        id : '2',
        name : 'Malaysia'
    },
    {
        id : '3',
        name : 'Philipina'
    },
    {
        id : '4',
        name : 'Laos'
    },
]

export default function ListboxPage(){
    const [selectedItem, setSelectedItem] = useState('')
    return(
        <div className="flex items-center justify-center h-screen">
            <Listbox as='div' className='relative' onChange={setSelectedItem}>
                <Listbox.Button className='flex items-center  border border-gray-500 rounded px-4 py-2 hover:bg-blue-400'>
                {selectedItem === '' ? 'Choose Country' : `${selectedItem}`} 
                <div className="flex">
                    <img src="/chevron-down.svg" className="ml-3 bg-indigo-600"/>
                </div>
                </Listbox.Button>
                <Listbox.Options className='absolute w-56 rounded mt-2 border border-gray-300'>
                {countries.map(country => (
                    <Listbox.Option key={country.id} value={country.name} className='py-2 px-4 hover:bg-gray-100 cursor-pointer' >{country.name}</Listbox.Option>
                ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}
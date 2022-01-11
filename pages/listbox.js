import { Listbox } from "@headlessui/react";

export default function ListboxPage(){
    return(
        <div className="flex items-center justify-center h-screen">
            <Listbox>
                <Listbox.Button className='flex items-center border border-gray-500 rounded px-4 py-2 hover:bg-blue-400'>
                Choose Country
                <div className="flex">
                    <img src="/chevron-down.svg" className="ml-3 bg-indigo-600"/>
                </div>
                </Listbox.Button>
                <Listbox.Options>
                    <Listbox.Option>Indonesia</Listbox.Option>
                    <Listbox.Option>Malaysia</Listbox.Option>
                    <Listbox.Option>Philipina</Listbox.Option>
                    <Listbox.Option>Laos</Listbox.Option>
                </Listbox.Options>
            </Listbox>
        </div>
    )
}
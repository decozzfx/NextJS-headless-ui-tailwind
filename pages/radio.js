import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

export default function MyRadioGroup() {
  let [plan, setPlan] = useState('')

  return (
    <div className="flex items-center justify-center h-screen">
      <RadioGroup value={plan} onChange={setPlan}>
        <RadioGroup.Label className='flex mb-6'>Fruit</RadioGroup.Label>
        <div className="flex flex-wrap -mx-4">
          <RadioGroup.Option className='w-4/12 px-2' value="Apple">
            {({ checked }) => (
              <span className={`rounded bg-white border border-gray-200 p-4 ${checked ? 'bg-blue-200' : ''}`}>Applee</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option className='w-4/12 px-2' value="Orange">
            {({ checked }) => (
              <span className={`rounded bg-white border border-gray-200 p-4 ${checked ? 'bg-blue-200' : ''}`}>Orange</span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option className='w-4/12 px-2' value="Carrot">
            {({ checked }) => (
              <span className={`rounded bg-white border border-gray-200 p-4 ${checked ? 'bg-blue-200' : ''}`}>Carrot</span>
            )}
          </RadioGroup.Option>
        </div>
      </RadioGroup>
    </div>
  )
}
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function MyToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex items-center justify-center h-screen">
      <Switch
         checked={enabled}
         onChange={setEnabled}
         className={`${
         enabled ? 'bg-blue-600' : 'bg-red-300'
         } relative inline-flex items-center h-6 rounded-full w-11 transition-all duration-500`}
      >
         <span
         className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
         } inline-block w-4 h-4 transform bg-white rounded-full`}
         />
      </Switch>
    </div>
  )
}
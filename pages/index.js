import styles from "../styles/Home.module.css";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Menu as='div' className='relative //'>
        <Menu.Button className='px-4 py-2 bg-green-700 text-white rounded-lg'>
        More
        </Menu.Button>
        <Transition
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">

        <Menu.Items className='absolute top-full bg-white shadow-lg'>
          <Menu.Item className=''>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && "bg-blue-500"}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Transition>
      </Menu>
    </div>
  );
}

import styles from "../styles/Home.module.css";
import { Menu } from "@headlessui/react";

export default function Home() {
  return (
    <div className='flex w-full'>
      <Menu as='div' className='relative //'>
        <Menu.Button className='px-4 py-2 bg-green-700 text-white rounded-lg'>
        More
        </Menu.Button>
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
      </Menu>
    </div>
  );
}

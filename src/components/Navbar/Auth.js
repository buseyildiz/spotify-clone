import React from "react";
import { Menu } from '@headlessui/react'
import { Icon } from "icons";



function Auth() {

  const user = {
    name:"Buse Yıldız",
    avatar:"https://media.licdn.com/dms/image/C4D03AQGiltrd2YG7DA/profile-displayphoto-shrink_800_800/0/1664270891033?e=2147483647&v=beta&t=zZhsU5l7UqZSW_csj1W05VxDgKLSc9Akjz_X5lbXMj8"
  }
  return (
    <Menu as="nav" className={"relative "}>
     {({open})=>(
      <>
         <Menu.Button className={`flex items-center h-8 rounded-3xl ${open ? "bg-active" : 'bg-black'} pr-2 hover:bg-active`}>
              <img src={user.avatar} className={"w-8 h-8 rounded-full p-0.5 mr-1"}/>
              <span className={"font-sm font-semibold mr-2"}>{user.name}</span>
              <span className={open && "rotate-180"}><Icon size={16} name="downDir"/></span>
         </Menu.Button>
       <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-1 z-[100]"}>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                href="#"
              >
                Account 
                <Icon name="external" size={16}/>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                href="#"
              >
                Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                href="#"
              >
                Log out
              </a>
            )}
          </Menu.Item>
         
         
       </Menu.Items>
      </>
     )}
    </Menu>
  );
}

export default Auth;

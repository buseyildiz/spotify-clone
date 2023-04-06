import { Icon } from 'icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <ul className='flex flex-col'>
            <li>
                <NavLink to={"/"} activeClassName='bg-active text-white' exact className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded '>
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>
                <NavLink to={"/search"} activeClassName='bg-active text-white' className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded '>
                    <span>
                        <Icon name="search" />
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink to={"/collection"} activeClassName='bg-active text-white' className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded '>
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Kitaplığın
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu
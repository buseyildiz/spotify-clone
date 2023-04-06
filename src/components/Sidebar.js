import React from "react";
import logo from "img/logo.svg";
import Menu from "./Sidebar/Menu";
import { Icon } from "icons";
import Playlist from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";

function Sidebar() {
  return (
    <aside className="w-60 pt-6 flex flex-col bg-black">

      <a href="#" className="mb-7 px-6">
        <img alt="" src={logo} className="h-10" />
      </a>

      <Menu className="px-2" />

      <nav className="mt-6">
        <ul>

          <li>
            <a href="#"  className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon size={12} name='plus'/>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>

          <li>
            <a href="#" className="py-2 px-6 flex text-sm items-center group text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 to-blue-300 text-white rounded-sm opacity-70 group-hover:opacity-100">
                <Icon size={12} name='heart'/>
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlist/>

      <DownloadApp/>


    </aside>
  );
}

export default Sidebar;

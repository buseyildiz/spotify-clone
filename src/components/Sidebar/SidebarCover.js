import { Icon } from "icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "stores/player";

function SidebarCover() {
  const current = useSelector((state) => state.player.current);

  const dispatch = useDispatch()
  return (
    <div className="pt-[100%] bg-black relative group">
      <img
        src={current.image}
        className="w-full h-full object-cover absolute left-0 top-0"
        alt=""
      />
      <button
        className="w-6 h-6 -rotate-90 rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] absolute top-1 right-1 bg-black  flex items-center justify-center"
        onClick={() => dispatch(setSidebar(false))}
      >
        <Icon size={16} name="arrowLeft" />
      </button>
    </div>
  );
}

export default SidebarCover;

import { Icon } from "icons";
import React from "react";

function Search() {
  return (
    <div className="mr-auto ml-4 relative ">
      <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon size={24} name="search" />
      </label>
      <input
      autoFocus={true}
        type="text"
        className="h-10 bg-white rounded-3xl placeholder-black/50 font-medium text-sm max-w-full pl-12 outline-none text-black w-[22.75rem]"
        placeholder="Sanatçılar,şarkılar veya podcast'ler "
        id="search-input"
      />
    </div>
  );
}

export default Search;

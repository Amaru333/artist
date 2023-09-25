import React from "react";

function Navbar() {
  return (
    <div className="shadow-md">
      <div className="max-w-screen-2xl mx-auto px-8 py-3 flex justify-between">
        <div className="flex items-center gap-x-3">
          <div className="w-12 h-12 rounded-full border"></div>
          <p>ABC</p>
        </div>
        <button className="bg-gradient-to-r from-[#F25369] to-[#C375EF] text-white px-8 rounded-full">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;

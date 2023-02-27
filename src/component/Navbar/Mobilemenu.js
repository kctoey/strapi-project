import React from "react";

const Mobilemenu = ({ close }) => {
  return (
    <div>
      <div className="fixed inset-0 top-0 h-full  backdrop-blur-sm bg-gray-500 bg-opacity-60 z-20 "></div>
      <div className="fixed inset-0 top-0 l-0   z-30">
        <div className="w-screen bg-white rounded-xl p-5 ">
          <div className="flex flex-column justify-between">
            <h1>Women</h1>
            <button
              onClick={close}
              className="w-7 h-7 hover:scale-110 transition-all cursor-pointer"
            >
              x
            </button>
          </div>
          <hr />
          <div className="divide-y  ">
            <h1 className="py-2">Men</h1>
            <h1 className="py-2">Children</h1>
            <h1 className="py-2">About</h1>
            <h1 className="py-2">Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;

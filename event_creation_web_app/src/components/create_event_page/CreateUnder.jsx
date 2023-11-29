import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Dropdown = () => {

  return (
    <div className="relative inline-block text-left">

      {/* button */}
      <button
        type="button"
        className="flex items-center space-x-4 focus:outline-none"
      >

        {/*START: image text and icon container */}
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">

          {/* image  */}
          <img
            src="http://res.cloudinary.com/dfrhy6m3m/image/upload/v1701102799/i31zii7w9w1b2zfzzg3m.png"
            alt="User"
            className=" h-full w-full rounded-full object-cover"
          />
        </div>

        {/* text */}
        <div className="flex flex-col text-left">
          <span className="text-xs text-gray-500">Create Under</span>
          <span className="text-sm font-semibold">Personal Calendar</span>
        </div>
        {/*END: image text and icon container */}

        {/* icon */}
        <IoIosArrowDown className="text-gray-600 " />
      </button>

    </div>
  );
};

export default Dropdown;

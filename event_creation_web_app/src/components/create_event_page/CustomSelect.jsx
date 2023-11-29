import React from 'react';

export default function CustomSelect({ optionList, name, value, onChange }) {


  return (
    <>
      <select  name={name} value={value} onChange={onChange} className='w-auto bg-transparent outline-none'>
        {optionList?.map((item, index) => (
          <option key={index} value={item} >
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

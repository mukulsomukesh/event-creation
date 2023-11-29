import React, { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

const themes = [
  { name: "Minimal", color: "c7c9c9" },
  { name: "Holiday", color: "995526" },
  { name: "Abstract", color: "333537" },
  { name: "Quantum", color: "CECFFB" }
];

export default function EventThemes() {
  const { state, dispatch } = useContext(EventContext);

  // handel event details input change
  const handleEventDetailsInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FORM_FIELD', field, value });
  };


  // handel theme click
  const handleClick = (theme) => {
    handleEventDetailsInputChange('eventTheme', theme);
  };

  return (
    <>
      <p className='mt-4 mb-1'> Theme </p>

      {/* START: theme container */}
      <div className='flex justify-between flex-wrap'>
        {themes.map((item, index) => (
          <div className='w-20 h-16 ' key={index}>

            {/*START:  theme box */}
            <div
              className={`h-full w-full cursor-pointer border-2 rounded-lg p-2 ${state.createEventForm.eventTheme.name === item.name ? 'border-primary-300' : ''}`}
              style={{ backgroundColor: `#${item.color}` }}
              onClick={() => handleClick(item)}
            >
              <p className='bg-white p-1 px-2 rounded-lg text-sm font-medium h-full relative'>
                Title
                <span className='absolute bottom-3 left-2 w-[65%] h-1 bg-primary-200 block'></span>
                <span className='absolute bottom-1 left-2 w-[50%] h-1 bg-primary-200 block'></span>
              </p>
            </div>
            {/*END:  theme box */}


            {/* theme name */}
            <p className={`text-sm text-center text-primary-300 ${state.createEventForm.eventTheme.name === item.name ? 'font-semibold' : ''}`}>{item.name}</p>
          </div>
        ))}
      </div>
      {/* END: theme container */}

    </>
  );
}

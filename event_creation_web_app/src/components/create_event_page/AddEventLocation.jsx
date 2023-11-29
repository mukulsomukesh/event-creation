import React, { useContext } from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import CustomInput from "../create_event_page/CustomInput";
import { EventContext } from '../../context/EventContext';

export default function AddEventLocation() {
    const { state, dispatch } = useContext(EventContext);

    // handel locatation change
    const handleLocationChange = (event) => {
        dispatch({ type: 'UPDATE_FORM_FIELD', field: 'eventLocation', value: event.target.value });
    };

    return (
        <>
            <div className="p-2 flex gap-2 w-full">

                {/* location icon */}
                <div className='flex flex-col justify-center h-10 w-10 items-center gap-0 rounded-lg border-2 border-primary-200 text-primary-100 mt-4'>
                    <MdOutlineLocationOn size={"25px"} />
                </div>

                {/*START: location input container */}
                <div className='bg-primary-50 p-4 rounded-xl w-full'>

                    {/* lable */}
                    <p className="text-lg font-medium mb-2">Add Event Location</p>

                    <CustomInput
                        name="eventLocation"
                        value={state.createEventForm.eventLocation}
                        onChange={handleLocationChange}
                        styling={"text-md"}
                        placeholder={"Enter Offline location or virtual link"}
                    />
                </div>
                {/*END: location input container */}

            </div>
        </>
    );
}

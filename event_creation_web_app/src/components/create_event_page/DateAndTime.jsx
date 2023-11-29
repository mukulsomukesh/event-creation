import React, { useContext, useEffect, useState } from 'react';
import IconWithText from '../Common/IconWithText';
import { CiGlobe } from 'react-icons/ci';
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2';
import { EventContext } from '../../context/EventContext';

export default function DateAndTime() {
    const { state, dispatch } = useContext(EventContext);
    const [startDateTime, setStartDateTime] = useState(state.createEventForm.startDateTime || '');
    const [endDateTime, setEndDateTime] = useState(state.createEventForm.endDateTime || '');

    // handel start date change
    const handleStartDateTimeChange = (event) => {
        const newStartDateTime = event.target.value;
        setStartDateTime(newStartDateTime);
        dispatch({ type: 'UPDATE_FORM_FIELD', field: 'startDateTime', value: newStartDateTime });
    };

    // handel end date change
    const handleEndDateTimeChange = (event) => {
        const newEndDateTime = event.target.value;
        setEndDateTime(newEndDateTime);
        dispatch({ type: 'UPDATE_FORM_FIELD', field: 'endDateTime', value: newEndDateTime });
    };


    // change date, month, day format
    const getMonthAndDate = (dateString) => {
        const date = new Date(dateString);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = date.toLocaleString('en-US', { day: 'numeric' });
        return { dayOfWeek, month, day };
    };

    // change time format
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    };


    // useEffect to set default value
    useEffect(() => {

        // create date object
        const tomorrow = new Date();

        // set tomorrow date for default start date
        tomorrow.setDate(tomorrow.getDate() + 1);
        const defaultStart = new Date(tomorrow);
        defaultStart.setHours(1, 0, 0, 0);
        setStartDateTime(defaultStart.toISOString().slice(0, 16));
        dispatch({ type: 'UPDATE_FORM_FIELD', field: 'startDateTime', value: defaultStart.toISOString().slice(0, 16) });

        // set tomorrow date for default end date
        const defaultEnd = new Date(tomorrow);
        defaultEnd.setHours(2, 0, 0, 0);
        setEndDateTime(defaultEnd.toISOString().slice(0, 16));
        dispatch({ type: 'UPDATE_FORM_FIELD', field: 'endDateTime', value: defaultEnd.toISOString().slice(0, 16) });

    }, []);

    return (
        <>
            <div className="p-2 flex gap-2 w-full">

                {/* START: month and date container at left */}
                <div className='flex w-12 flex-col justify-center items-center gap-0 rounded-lg border-2 h-fit border-primary-200 mt-4'>
                    <p className='bg-primary-200 w-full text-center rounded-t-lg p-1 h-7 text-sm font-medium'>{getMonthAndDate(startDateTime).month}</p>
                    <p className="text-md ">{getMonthAndDate(startDateTime).day}</p>
                </div>
                {/* START: month and date container at left */}


                {/* START: start and end date and time container */}
                <div className='bg-primary-50 p-4 rounded-xl w-full'>

                    {/* START: start date container */}
                    <div className='flex font-bold justify-between text-primary-300 gap-1 '>
                        <p className=' p-1'>Start</p>

                        {/* START: display start date and time */}
                        <p className='pt-1'>

                            {/* start date */}
                            <span className='bg-primary-200 p-1'>
                                {getMonthAndDate(startDateTime).dayOfWeek.slice(0, 3) + ", "}
                                {getMonthAndDate(startDateTime).month + " " + getMonthAndDate(startDateTime).day}
                            </span>

                            {/* start time */}
                            <span className='bg-primary-200 p-1 ml-1 '>
                                {formatTime(startDateTime)}
                            </span>

                            {/* date time picker */}
                            <input
                                type='datetime-local'
                                className='w-5 bg-transparent'
                                value={startDateTime}
                                onChange={handleStartDateTimeChange}
                            />
                        </p>
                        {/* END: display start date and" */}

                    </div>
                    {/* END: start date container */}


                    {/* START: end date container */}
                    <div className='flex font-bold justify-between text-primary-300 gap-1 mt-2 mb-2'>
                        <p className='p-1'>End</p>

                        {/* START: display end date and time */}
                        <p className='pt-1'>

                            {/* end date */}
                            <span className='bg-primary-200 p-1'>
                                {getMonthAndDate(endDateTime).dayOfWeek.slice(0, 3) + ", "}
                                {getMonthAndDate(endDateTime).month + " " + getMonthAndDate(endDateTime).day}
                            </span>

                            {/* end time */}
                            <span className='bg-primary-200 p-1 ml-1 '>
                                {formatTime(endDateTime)}
                            </span>

                            {/* date and time picker */}
                            <input
                                type='datetime-local'
                                className='w-5 bg-transparent'
                                value={endDateTime}
                                onChange={handleEndDateTimeChange}
                            />
                        </p>
                    </div>
                    {/* END: end date container */}

                    <IconWithText icon={<CiGlobe />} text={"GMP+05:30 Calcutta"} />
                    <IconWithText icon={<HiOutlineSquare3Stack3D />} text={"Create Multi-Session Event"} />
                </div>
                {/* END: start and end date and time container */}

            </div>
        </>
    );
}

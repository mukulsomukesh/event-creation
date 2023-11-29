import React, { useContext } from 'react';
import Header from '../components/create_event_page/Header';
import CreateUnder from '../components/create_event_page/CreateUnder';
import DateAndTime from '../components/create_event_page/DateAndTime';
import AddEventLocation from '../components/create_event_page/AddEventLocation';
import EventOptions from '../components/create_event_page/EventOptions';
import EventImage from '../components/create_event_page/EventImage';
import EventThemes from '../components/create_event_page/EventThemes';
import IconWithText from '../components/Common/IconWithText';
import { TbCircleFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../components/create_event_page/CustomInput';
import CustomSelect from '../components/create_event_page/CustomSelect';
import { EventContext } from '../context/EventContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateEventPage() {

    const { state, dispatch } = useContext(EventContext);
    const navigate = useNavigate();

    // handel event details input change
    const handleEventDetailsInputChange = (name, value) => {
        dispatch({ type: 'UPDATE_FORM_FIELD', field: name, value });
    };

    // handel create event 
    const handleCreateEvent = () => {

        // check for mendatory fields, if not fill then display error toast message
        if (!state.createEventForm.eventName.trim()) {
            return toast.error('Event name is mendatory to fill.', { position: toast.POSITION.TOP_RIGHT });
        }
        if (!state.createEventForm.organizerName.trim()) {
            return toast.error('Organizer name is mendatory to fill.', { position: toast.POSITION.TOP_RIGHT });
        }
        if (!state.createEventForm.eventLocation.trim()) {
            return toast.error('Offline location or virtual link is mendatory to fill.', { position: toast.POSITION.TOP_RIGHT });
        }

        // toast message
        toast.success('Event successfully created.', { position: toast.POSITION.TOP_RIGHT });

        // append data in event list
        dispatch({ type: 'CREATE_EVENT', eventDetails: state.createEventForm });

        // nagifate user to event_list page
        navigate("/event_list")
    };

    return (
        <div className='bg-primary-50 '>

            {/* header */}
            <Header />

            {/*START: event create container */}
            <div className='bg-white mt-4 p-6 rounded-xl flex flex-col md:flex-row w-fit max-w-screen-lg m-auto gap-8'>

                <div className='md:w-1/2 max-w-[450px]'>

                    {/* create under dropdown */}
                    <CreateUnder />

                    {/* event name input */}
                    <CustomInput name='eventName' value={state.createEventForm.eventName} onChange={(e) => { handleEventDetailsInputChange("eventName", e.target.value) }} styling='text-2xl p-2' placeholder='Enter Event Name...' />

                    {/* organizer name input */}
                    <CustomInput name='organizerName' value={state.createEventForm.organizerName} onChange={(e) => { handleEventDetailsInputChange("organizerName", e.target.value) }} styling='text-2xl p-2' placeholder='Enter Organizer Name...' />

                    {/* event Date and Time */}
                    <DateAndTime />

                    {/* add event location */}
                    <AddEventLocation />

                    {/* Event Options, Ticket type, ticket price, capacity, approval, Limit In Numbers, visiblity */}
                    <EventOptions />


                    {/* create event button */}
                    <button onClick={handleCreateEvent} className='bg-primary-300 text-primary-50 p-2 mt-4 rounded-lg w-full'>
                        Create Event
                    </button>
                </div>

                {/* START: theme container */}
                <div className='md:w-1/2 max-w-[450px]'>

                    {/* Event Image */}
                    <EventImage />

                    {/* Event themes */}
                    <EventThemes />

                    {/*Start: color and Typeface container */}
                    <div className='mt-8 w-full p-2 rounded-lg bg-primary-200'>

                        {/* select color */}
                        <div className='flex justify-between items-center'>
                            <IconWithText icon={<TbCircleFilled style={{ color: state.createEventForm.eventColor }} />} text='Color' />
                            <CustomSelect optionList={['Red', 'Gray', 'Black', 'Blue']} name='eventColor' value={state.createEventForm.eventColor} onChange={(e) => { handleEventDetailsInputChange(e.target.name, e.target.value) }} />
                        </div>


                        {/* select type face */}
                        <div className='flex justify-between items-center mt-1'>
                            <IconWithText icon={<span className='font-bold'> Ag </span>} text='Typeface' />
                            <CustomSelect optionList={['Default']} name='eventTypeFace' value={state.createEventForm.eventTypeFace} onChange={(e) => { handleEventDetailsInputChange(e.target.name, e.target.value) }} />
                        </div>
                    </div>
                    {/*END: color and Typeface container */}

                </div>
                {/* END: theme container */}

            </div>
            {/*END: event create container */}

            <ToastContainer />
        </div>
    );
}

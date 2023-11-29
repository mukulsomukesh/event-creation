import React, { useContext } from 'react';
import IconWithText from '../components/Common/IconWithText';
import { FiVideo } from 'react-icons/fi';
import { TbRibbonHealth, TbCircleFilled } from 'react-icons/tb';
import { EventContext } from '../context/EventContext';
import CastumTag from '../components/listing_page/CastumTag';
import ImageGroup from '../components/listing_page/ImageGroup';


export default function ListingPage() {
  const { state } = useContext(EventContext);

  // change date and time format
  const getMonthAndDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.toLocaleString('en-US', { day: 'numeric' });
    return { dayOfWeek, month, day };
  };


  // format time
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <div className="md:w-2/3">

      {/*START:  timeline container */}
      <div className="relative w-[98vw] text-left">

        {/* START: map event line in timeline */}
        <div className={`w-full lg:w-[55vw] md:w-[85vw] m-auto`}>

      {/* heading */}
      <h1 className="font-bold  py-5 text-3xl ">Events</h1>

          {state.eventList?.map((item, index) => (
            <div className="flex pb-4  relative justify-between items-start " key={index}>
              
              {/*START: event date with day */}
              <div className="mt-4 h-full pl-1 ">

                {/* event start date */}
                <p className="font-bold">
                  {getMonthAndDate(item.startDateTime).day} {getMonthAndDate(item.startDateTime).month}
                </p>

                {/* event day of week */}
                <p className="font-medium text-primary-300 opacity-70 " >{getMonthAndDate(item.startDateTime).dayOfWeek}</p>
              </div>
              {/*END: event date with day */}


              {/* timeline with icon */}
              <div className={`border-r-2 border-black absolute h-full left-24 md:left-24 top-4 z-10`}
                style={{ height: index === state.eventList.length - 1 ? 'calc(100% - 30px)' : '100%' }} >

                <TbCircleFilled className="-mr-2  -mt-2" />
              </div>

              {/* START: event informatation with image container */}
              <div className="ml-10 w-full  bg-white p-4 rounded-lg flex justify-between flex-wrap  gap-1">

                {/* START: event informatation */}
                <div className='w-auto md:max-w-[77%] ' >

                  {/* event start and end time */}
                  <p className="text-md font-bold  text-primary-300 opacity-60">{formatTime(item.startDateTime)} - {formatTime(item.endDateTime)} </p>

                  {/* event name */}
                  <p className="text-2xl font-medium mb-2">{item.eventName}</p>

                  {/* organizer name */}
                  <IconWithText icon={<TbRibbonHealth />} text={`By ${item.organizerName}`} />
                  <IconWithText icon={<FiVideo />} text="Virtual" />

                  {/*START: tags and inage group */}
                  <div className="flex gap-1 mt-3 font-semibold flex-wrap ">
                    <CastumTag text={"Invited"} />

                    {item.ticketsType === "Free" ? (
                      <CastumTag text={"Ticket: Free"} />
                    ) : (
                      <CastumTag text={`Ticket: ${item.ticketPrice} Rs`} />
                    )}

                    {/* images group */}
                    <ImageGroup />

                  </div>
                  {/*END: tags and inage group */}

                </div>
                {/* END: event informatation */}

                {/* event Image */}
                <div className="max-w-[120px] max-h-[120px]">
                  <img className="h-full w-full" src={item.eventImage} alt="Event" />
                </div>

              </div>
              {/* END: event informatation container */}

            </div>
          ))}
        </div>
        {/* END: map event line in timeline */}


      </div>
      {/*END:  timeline container */}


    </div>
  );
}

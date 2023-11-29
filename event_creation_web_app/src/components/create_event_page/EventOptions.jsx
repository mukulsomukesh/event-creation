import React, { useContext } from 'react';
import IconWithText from '../Common/IconWithText';
import { LuTicket } from 'react-icons/lu';
import { TbUserCheck } from 'react-icons/tb';
import { PiArrowLineUpDuotone } from 'react-icons/pi';
import { CiGlobe } from 'react-icons/ci';
import CustomSelect from './CustomSelect';
import CustomInput from './CustomInput';
import { MdOutlinePriceChange } from 'react-icons/md';
import { FaPeopleRoof } from 'react-icons/fa6';
import { EventContext } from '../../context/EventContext';

export default function EventOptions() {
  const { state, dispatch } = useContext(EventContext);
  const { ticketPrice, visibility, capacity, capacityLimited, requireApproval, ticketsType } = state.createEventForm;

  // handel event details input change
  const handleEventDetailsInputChange = (field, value) => {
    dispatch({ type: 'UPDATE_FORM_FIELD', field, value });
  };

  // handel ticket price change
  const handleTicketPriceChange = (value) => {
    const newPrice = Math.max(0, value);
    handleEventDetailsInputChange('ticketPrice', newPrice);
  };


  // handel capacity limit change
  const handleCapacityLimitedChange = (value) => {
    const newCapacity = capacity === 'Limited' ? Math.max(0, value) : 0;
    handleEventDetailsInputChange('capacityLimited', newCapacity);
  };

  return (
    <>
      <p> Event Options </p>

      {/* START: event options contrainer */}
      <div className='bg-primary-50 rounded-xl'>

        {/*START: Ticket type  */}
        <div className='flex px-4 py-2 rounded-xl justify-between'>
          <IconWithText icon={<LuTicket />} text={'Tickets'} />
          <CustomSelect
            optionList={['Free', 'Paid']}
            name={'ticketsType'}
            value={ticketsType}
            onChange={(e) => handleEventDetailsInputChange('ticketsType', e.target.value)}
          />
        </div>
        {/*END: Ticket type  */}

        {/* ṢTART: ticket price, display only if ticket type is paid */}
        {ticketsType === 'Paid' && (
          <div className='flex px-4 py-2 rounded-xl justify-between'>
            <IconWithText icon={<MdOutlinePriceChange />} text={'Ticket Price'} />
            <CustomInput
              type='number'
              name={'ticketPrice'}
              value={ticketPrice}
              onChange={(e) => {
                handleTicketPriceChange(e.target.value);
              }}
              styling={'max-w-[90px]'}
              placeholder={'Rs.'}
            />
          </div>
        )}
        {/* END: ticket price, display only if ticket type is paid */}

        {/* START: require approval */}
        <div className='flex px-4 py-2 rounded-xl justify-between'>
          <IconWithText icon={<TbUserCheck />} text={'Require Approval'} />
          <label className='relative inline-flex items-center mt-1 cursor-pointer'>
            <input
              type='checkbox'
              name={'requireApproval'}
              onChange={(e) => {
                handleEventDetailsInputChange('requireApproval', e.target.checked);
              }}
              checked={requireApproval}
              className='sr-only peer'
            />
            <div className='w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all'></div>
          </label>
        </div>
        {/* END: require approval */}

        {/* START: capacity */}
        <div className='flex px-4 py-2 rounded-xl justify-between'>
          <IconWithText icon={<PiArrowLineUpDuotone />} text={'Capacity'} />
          <CustomSelect
            optionList={['Unlimited', 'Limited']}
            name={'capacity'}
            value={capacity}
            onChange={(e) => handleEventDetailsInputChange('capacity', e.target.value)}
          />
        </div>
        {/* END: capacity */}


        {/* START: capacity limit, display only if capacity is limited */}
        {capacity === 'Limited' && (
          <div className='flex px-4 py-2 rounded-xl justify-between'>
            <IconWithText icon={<FaPeopleRoof />} text={'Maximum Limit'} />
            <CustomInput
              type='number'
              name={'capacityLimited'}
              value={capacityLimited}
              onChange={(e) => {
                handleCapacityLimitedChange(e.target.value);
              }}
              styling={' max-w-[80px] '}
              placeholder={'Max Limit '}
            />
          </div>
        )}
        {/* END: capacity limit, display only if capacity is limited */}


        {/* START: visiblity */}
        <div className='flex px-4 py-2 rounded-xl justify-between'>
          <IconWithText icon={<CiGlobe />} text={'Visibility'} />
          <CustomSelect
            optionList={['Public', 'Private']}
            name={'visibility'}
            value={visibility}
            onChange={(e) => handleEventDetailsInputChange('visibility', e.target.value)}
          />
        </div>
        {/* END: visiblity */}


      </div>
      {/* END: event options contrainer */}

    </>
  );
}

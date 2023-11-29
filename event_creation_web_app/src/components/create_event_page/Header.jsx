import React from 'react'
import { MdOutlineEventSeat } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";

const navigatationOptions = [
    {
        icon: <MdOutlineEventSeat />,
        name: "Events"
    },
    {
        icon: <MdOutlineCalendarMonth />,
        name: "Calesdars"
    },
    {
        icon: <MdOutlineExplore />,
        name: "Explore"
    },
]

export default function Header() {
    return (
        <div className='flex gap-6 ml-[21vw] pt-4 ' >

            {/* map navigatation options */}
            {navigatationOptions.map((item, index) => (
                <p key={index} className='flex gap-1 justify-center items-center font-semibold text-primary-100 ' > <span> {item.icon} </span> <span> {item.name} </span> </p>
            ))}

        </div>
    )
}

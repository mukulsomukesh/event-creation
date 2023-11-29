import React from 'react'

export default function ImageGroup() {
    return (
        <>
            <div className="flex items-center  -space-x-4 rtl:space-x-reverse ml-2">

                {/* images */}
                <img className="w-8 h-8 border-2 border-white rounded-full " src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                <img className="w-8 h-8 border-2 border-white rounded-full " src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                <img className="w-8 h-8 border-2 border-white rounded-full " src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />

                {/* number with a hyper lionk */}
                <a className="flex items-center justify-center w-8 h-8 text-xs font-medium text-primary-300 bg-primary-100 border-2 border-white rounded-full hover:bg-primary-200" href="#">+99</a>
            </div>
        </>
    )
}

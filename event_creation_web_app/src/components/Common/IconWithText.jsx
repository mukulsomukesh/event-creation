import React from 'react'

export default function IconWithText({icon, text, direction}) {
  return (
<>
    <p className={` flex justify-start gap-2 items-center ${direction} `} > {icon} <span> {text}  </span> </p>
</>
  )
}

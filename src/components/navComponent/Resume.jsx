import React from 'react'

const Resume = () => {
  return (
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
       <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">Resume</button>
       <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Hire me</button>

    </div>
  )
}

export default Resume
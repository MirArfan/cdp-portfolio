import React from 'react'

const NavList = () => {
    return (
        <div >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {/* <li>
                    <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" >About</a>
                </li> */}
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 ">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 ">Experience</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded  hover:bg-gray-200 ">Project</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 ">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default NavList
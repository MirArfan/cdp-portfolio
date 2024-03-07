import React from 'react'

const NavList = () => {
    return (
        <div >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-5  md:flex-row md:mt-0 md:border-0 md:bg-white">
               
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
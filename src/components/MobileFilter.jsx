import React from 'react'
import { FaFilter } from 'react-icons/fa'

const MobileFilter = ({setOpenFilter}) => {
  return (
    <div>
      <div className="sm:block md:hidden lg:hidden">
        <div
          className="text-zinc-600 bg-zinc-100 flex justify-between items-center px-4 py-2.5 mb-7 rounded-md"
          onClick={() => setOpenFilter(true)}
        >
          <h1 className="font-semibold">Filters</h1>
          <FaFilter />
        </div>
      </div>
    </div>
  )
}

export default MobileFilter

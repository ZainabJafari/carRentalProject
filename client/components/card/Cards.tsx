import React from 'react'

const Cards = ({cardTitle, cardContent}: any) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default">
    <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark bg-[#17b794]">
      <h4 className="text-xl font-semibold text-black hover:text-primary">
        {cardTitle}
      </h4>
    </div>
    <div className="px-7.5 pt-6 pb-9">
      <p className='p-5 text-lg'>{cardContent}</p>
    </div>
  </div>
  )
}

export default Cards

import Image from 'next/image'
import React from 'react'

const BASE_URL_PHOTO="https://maps.googleapis.com/maps/api/place/photo?maxwidth=800"
function PlaceItemCard({place}:any) {
  return (
    <div className='w-full z-10 border-[1px] 
    rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer'>
  {place?.photos?  <Image src={BASE_URL_PHOTO+
    "&photo_reference="+place?.photos[0]?.photo_reference+
    "&key="+process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY} alt='placeholder'
        width={200} height={80} 
        className='w-full h-[150px] object-cover rounded-t-xl' />:
        <Image src="/placeholder.jpg" alt='placeholder'
                width={200} height={80} 
                className='w-full h-[150px] object-cover rounded-t-xl' />}
    <div className='p-2'>
        <h2 className='line-clamp-2'>{place.name}</h2>
        <div className='flex gap-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor"
                className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <h2 className='text-[12px]
             text-gray-400 line-clamp-2'>{place.formatted_address}</h2>
        </div>
        <div className='flex gap-2 mt-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
        viewBox="0 0 24 24" strokeWidth={1.5} 
        stroke="currentColor" className="w-4 h-4 text-red-500">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

            <h2 className='text-[12px]
             text-gray-400 line-clamp-2 tracking-wider'>{place.rating} ({place.user_ratings_total})</h2>
        </div>
    </div>
</div>
  )
}

export default PlaceItemCard
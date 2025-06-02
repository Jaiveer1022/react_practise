import React from 'react'

function Card({person}) {
  return (
    <div>
        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
    <div>
      <img class="w-full size-50 shadow-xl rounded-md" alt="" src="https://imgs.search.brave.com/N7EpIMgpzMhoKXR64bIHdQYZ7ae2KXterrcsoYB5CVA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3R1dHRjYXJzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMi9Qb3JzY2hl/LTkxMS1TQy1Db3Vw/ZS0xMy5qcGVn" />
    </div>
    <div class="flex items-center md:items-start">

      <h2 className="mr-10" >{person.name} is my {person.my}</h2>

    <a href="https://stake.games/" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Go to Example
</a>

     
    </div>
  </div>
  </div>
  )
}

export default Card
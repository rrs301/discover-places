import React from 'react'

function Skelton() {
  return (
    <div>
        <div className="shadow-md
         rounded-md p-4 max-w-sm w-full mx-auto">
  <div className="animate-pulse flex flex-col space-x-4">
    <div className="rounded-md bg-slate-200 h-[150px] w-full"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Skelton
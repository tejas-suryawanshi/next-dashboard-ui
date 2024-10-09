const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-600">
        <button className="py-2 px-4 rounded-md bg-slate-300 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        <div className="flex items-center gap-2 text-sm">
           <button className="px-2 rounded-sm bg-PabloMauve">1</button>
           <button className="px-2 rounded-sm bg-gray-200">2</button>
           <button className="px-2 rounded-sm bg-gray-200">3</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-300 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination
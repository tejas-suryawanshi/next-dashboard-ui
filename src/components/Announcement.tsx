"use client"

const Announcement = () => {
  return (
    <div className='rounded-md bg-white p-4' >
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-[#00bbf9] rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Announcement 1 !</h2>
                    <span className="text-xs text-gray-500 bg-white font-mono rounded-md px-y py-1">14-09-2024</span>
                </div>
                <p className="text-sm text-gray-900 mt-2">----------------------------------------------</p>
            </div>
            <div className="bg-[#7161ef] rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Announcement 2 !</h2>
                    <span className="text-xs text-gray-500 bg-white font-mono rounded-md px-y py-1">14-09-2024</span>
                </div>
                <p className="text-sm text-gray-900 mt-2">----------------------------------------------</p>
            </div>
            <div className="bg-[#f15bb5] rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Announcement 3 !</h2>
                    <span className="text-xs text-gray-500 bg-white font-mono rounded-md px-y py-1">14-09-2024</span>
                </div>
                <p className="text-sm text-gray-900 mt-2">----------------------------------------------</p>
            </div>
            <div className="bg-[#00f5d4] rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Announcement 4 !</h2>
                    <span className="text-xs text-gray-500 bg-white font-mono rounded-md px-y py-1">14-09-2024</span>
                </div>
                <p className="text-sm text-gray-900 mt-2">----------------------------------------------</p>
            </div>
        </div>
    </div>
  )
}

export default Announcement
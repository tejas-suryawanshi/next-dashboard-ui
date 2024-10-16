import FormModal from "@/components/FormModal"
import ListTable from "@/components/ListTable"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import { role, lessonsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Lessons = {
  id:number;
  subject:string;
  class:string;
  teacher:string;
}

const columns = [
  {
    header:"Subject Name", accessor:"name"
  },
  {
    header:"Class",
    accessor:"class"
  },
  {
    header:"Teacher",
    accessor:"teacher",
    className:"hidden md:table-cell"
  },
  {
    header:"Action",
    accessor:"action",
    className:"hidden lg:table-cell"
  }
,
]; 

const LessonsListPage = () => {

  const renderRow = (item:Lessons) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-LamaPurpleLight">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
            <>
          <FormModal table="teacher" type="update" data={item}/>
          <FormModal table="teacher" type="delete" id={item.id}/>
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
            <h1 className="hidden md:block text-lg font-semibold">All Lessons  :</h1>
            <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                <TableSearch/>
                <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffd400]">
                      <Image src="/filter.png" alt="" width={16} height={16}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffd400]">
                      <Image src="/sort.png" alt="" width={16} height={16}/>
                    </button>
                 {role === "admin" && (
                  <FormModal table="parent" type="create"/>
                 )}
                </div>
            </div>
        </div>
        {/* LIST */}
        <ListTable columns={columns} renderRow={renderRow} data={lessonsData}/>
        {/* PAGINATION */}
        <Pagination/>
    </div>
  )
}

export default LessonsListPage
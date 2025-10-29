import { Funnel, Search } from 'lucide-react';


export const Filter = () => {
    return (
        <div className="px-4 py-6 border border-1 border-gray-200 bg-white rounded-lg relative">
            <div className='flex items-center text-lg space-x-3'>
                <div>
                     <Funnel />
                </div>
                <div>
                    Filters & Search
                </div>
            </div>
            <div className='space-x-5 flex mt-5'>
                <div  className='w-[30%]'>
                    <Search className='absolute text-gray-600 left-6 top-21 '/>
                    <input type="text" placeholder='Search Reports...' className=' py-2 px-2 border border-1 h-12 border-gray-300 bg-indigo-50 rounded-lg w-full text-center ' />
                </div>
                <select className=' w-[30%] border border-1 border-gray-300 bg-indigo-50 rounded-lg w-[20%] text-center h-12' name="" id="">
                    <option value="">All Statuses</option>
                    <option value="">Open</option>
                    <option value="">Closed</option>
                </select>
                <select className=' w-[30%] border border-1 border-gray-300 bg-indigo-50 rounded-lg w-[20%] text-center h-12' name="" id="">
                    <option value="">All Properties</option>
                    <option value="">Open</option>
                    <option value="">Closed</option>
                </select>
                <select className=' w-[30%] border border-1 border-gray-300 bg-indigo-50 rounded-lg w-[20%] text-center h-12' name="" id="">
                    <option value="">All Properties</option>
                    <option value="">Open</option>
                    <option value="">Closed</option>
                </select>
            </div>
        </div>
    )
}   

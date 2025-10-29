


export const StatusBoard = ({label_1, label_2, label_3, label_4}) => {
    return(
        <div className="bg-slate-100 rounded-lg p-3 mt-5">
            <div className="grid grid-cols-4 gap-4 bg-white rounded-md p-1" >
                <button className="text-gray-600 cursor-pointer hover:bg-blue-100 hover:rounded-lg transition-all duration-500 delay-50 transition-colors h-12"><div className="flex space-x-2 justify-center items-center "><div>{label_1}</div> </div></button>
                <button className="text-gray-600 cursor-pointer hover:bg-blue-100 hover:rounded-lg transition-all duration-500 delay-50 transition-colors h-12">
                    <div className="flex space-x-2 justify-center items-center "><div>{label_2}</div> </div>
                </button>
                <button className="text-gray-600 cursor-pointer hover:bg-blue-100 hover:rounded-lg transition-all duration-500 delay-50 transition-colors h-12">
                    <div className="flex space-x-2 justify-center items-center "><div>{label_3}</div> </div>
                </button>
                <button className="text-gray-600 cursor-pointer hover:bg-blue-100 hover:rounded-lg transition-all duration-500 delay-50 transition-colors h-12">
                    <div className="flex space-x-2 justify-center items-center "><div>{label_4}</div> </div>
                </button>

            </div>
        </div>
    )
}
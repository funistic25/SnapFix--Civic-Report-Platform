


export const SummaryReports = () => {
    
    const summaryMock = [
        {
            heading: "Total Reports",
            icon: "",
            number: 178,
            compare: "+12% from last week "
        }, 
        {
            heading: "Total Reports",
            icon: "",
            number: 178,
            compare: "+12% from last week "
        }, 
        {
            heading: "Total Reports",
            icon: "",
            number: 178,
            compare: "+12% from last week "
        }, 
        {
            heading: "Total Reports",
            icon: "",
            number: 178,
            compare: "+12% from last week "
        }, 

    ]


    return (
        
        <div className="mt-4 flex space-x-4 ">
            {summaryMock.map( (summary) => {
                return(

                    <div className="border border-2 border-gray-200 p-7 bg-white rounded-lg w-[30%] ">
                
                        <div className="flex">
                            <div className="text-gray-400">{summary.heading}</div>
                            <div className="">{summary.icon}</div>
                        </div>
                        <div>
                            <div className="font-semibold text-lg">{summary.number}</div>
                            <p className=" text-xs text-green-500">{summary.compare}</p>

                        </div>

                    </div>
                )
            })}
        </div>  
    )
}


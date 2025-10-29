


export const ReportHeading = () => {


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

    ]


    const StatusAssigned = {

        Pending:"class"
    }
    


    return (
        <div className="mt-4 w-[75%] space-y-4 ">
            <div className="border border-2 border-gray-200 p-7 bg-white rounded-lg w-full ">
        
                <div >
                    <div className="text-black">Water Leak</div>
                    <div className="">{summary.icon}</div>
                </div>
                <div>
                    <div className="font-semibold text-lg">{summary.number}</div>
                    <p className=" text-xs text-green-500">{summary.compare}</p>

                </div>
                <div>
                    <div className="font-semibold text-lg">{summary.number}</div>
                    <p className=" text-xs text-green-500">{summary.compare}</p>

                </div>

            </div>
        </div>  
    )
}
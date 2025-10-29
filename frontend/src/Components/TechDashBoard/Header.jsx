

export const Header = ( {name,Role, subRole}) => {
    return (
        <div className="flex justify-between w-full  items-center">
            <div className="flex space-x-4 ">
                <img
                src="https://api.dicebear.com/9.x/initials/svg?seed=Adrian&backgroundColor=94A3B8"
                alt="avatar" className="size-15 rounded-full"/>
                <div className="text-black ">
                    <div className="text-lg">{name}</div>
                    <div className="text-gray-700 text-sm">{Role}</div>
                    <div className="text-gray-700  text-sm">{subRole}</div>
                </div>
            </div>
            <button className="text-center text-sm px-6 bg-slate-200 border border-3 border-slate-400 h-10 rounded-lg">Logout</button>
        </div>
    )
}
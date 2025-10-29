export const InputBox = ({label,label2, onChange}) => {
    return (
        <div className="w-full mt-4">
            <div className="font-bold"> {label} </div>
            <input type="text" placeholder={label2}  onChange={onChange} className="border rounded-sm w-full p-2 border-gray-400 mt-2"/>

        </div>
    )
}
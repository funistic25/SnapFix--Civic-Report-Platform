export const Button = ({label, onClick}) => {
    return (
        <div onClick={onClick} className="w-full rounded-md bg-black text-white p-2 text-center mt-5 cursor-pointer" >
            {label}
        </div>
    )
}
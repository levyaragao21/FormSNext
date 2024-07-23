export default function Button({title = ""}){
    return(
        <button className="bg-indigo-500 text-white p-4 rounded-xl w-full">
            {title}
        </button>
    )
}
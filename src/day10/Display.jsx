



const Display = ({datas,handleEdit,handleDelete}) => {
  return (
    <>
    <div className="mx-80 my-8 space-y-4 ">
        {datas.map((e,i)=>(
            <div key={i}  className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-center hover:shadow-xl duration-300  flex-col gap-2">
                <div className="space-y-3">
                    <p className="text-xl font-semibold"><span className="font-bold text-indigo-600">Name:</span><span className="ml-2 text-gray-800"> {e.UserName}</span></p>
                    <p className="text-lg"><span className="font-bold text-green-600">Age:</span><span className="ml-2 text-gray-800">{e.UserAge}</span></p>
                    <p className="text-lg"><span className="font-bold text-purple-600">City: </span><span className="ml-2 text-gray-800">{e.UserCity}</span></p>

            </div>
                <div className="flex gap-3 mt-4">
                    <button onClick={() => handleEdit(e)} className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-green-600 hover:scale-105 transition duration-300">Edit </button>
                    <button onClick={() => handleDelete(i)} className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 hover:scale-105 transition duration-300">Delete </button>

                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Display
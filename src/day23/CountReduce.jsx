import { useReducer } from "react";

let initialValue = 0;

const reduce = (state, action) => {
  switch (action.type) {
    case "Inc":
      return state + 1

    case "Dec":
      return state > 0 ? state - 1 : initialValue

    case "RST":
      return initialValue

    default:
      return state
  }
}

const CountReduce = () => {
  const [state, dispatch] = useReducer(reduce, initialValue)

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-96 text-center">
        
        <h1 className="text-3xl font-bold text-indigo-600 mb-8">Counter App</h1>

        <div className="text-6xl font-bold text-gray-800 mb-8">
          {state}
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={() => dispatch({ type: "Inc" })} className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition duration-200">
            Increment
          </button>

          <button onClick={() => dispatch({ type: "Dec" })} className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition duration-200">
            Decrement
          </button>

          <button onClick={() => dispatch({ type: "RST" })} className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-lg font-semibold transition duration-200">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default CountReduce
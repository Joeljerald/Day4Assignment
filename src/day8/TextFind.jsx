import { useState } from "react";

const TextFind = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  const handleAdd = () => {
    if (text === "") return;
    setTexts([
      ...texts,
      {
        Value: text,
        Length: text.length,
        UpperCase: text.toUpperCase(),
        LowerCase: text.toLowerCase(),
      },
    ]);

    setText("");
  };
  return (
    <div className="border-2 mx-80 my-8 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Text Analyzer</h1>
      <div className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-2">Enter Text</label>
          <input type="text" value={text} placeholder="Type something..." onChange={(e) => setText(e.target.value)} className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <button onClick={handleAdd} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">Add Text</button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Added Texts</h2>
        {texts.length === 0 ? (<p className="text-gray-500"> No text added</p>) : 
        (texts.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-sm mb-4" >
              <p className="mb-2"><span className="font-semibold">Value: </span>{item.Value}</p>
              <p className="mb-2"><span className="font-semibold">Length: </span>{item.Length}</p>
              <p className="mb-2"><span className="font-semibold">Uppercase: </span>{item.UpperCase}</p>
              <p className="mb-2"><span className="font-semibold">Lowercase: </span>{item.LowerCase}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TextFind;
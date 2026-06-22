import { useState } from "react";
import Text from "../components/text";
import withUpperCase from "../hoc/withUpperCase";

const EnhancedText = withUpperCase(Text);

const UpperMain = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">Upper Case Converter</h1>
        <label className="block font-semibold mb-2">Enter a Message</label>
        <input type="text" value={text} placeholder="Enter a Message" onChange={(e) => setText(e.target.value)} className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"/>

        <div className="mt-6">
          <EnhancedText text={text} />
        </div>

      </div>
    </div>
  );
};

export default UpperMain;
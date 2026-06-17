import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div className="flex justify-center items-center py-10 bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-80 text-center hover:shadow-xl transition duration-300">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Hello React</h1>
          <h2 className="text-xl text-gray-700">Value:<span className="font-semibold text-green-600 ml-2">100</span></h2>
        </div>
      </div>
    );
  }
}
export default ClassComponent;
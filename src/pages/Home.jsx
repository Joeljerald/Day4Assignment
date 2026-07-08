import { Link } from "react-router-dom";
import PageLayout from "../PageLayout"

const Home = () => {
  return (
    <>  
    <PageLayout>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-3">React Tasks</h1>
      <p className="text-lg text-gray-600 mb-10">Select a day to view the assignment</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/day1"  rel="noopener noreferrer" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Day 1</h2>
          <p className="text-gray-500">React basics Components task 1</p>
        </Link>

        <Link to="/day2" rel="noopener noreferrer" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Day 2</h2>
          <p className="text-gray-500">React assignment tasks 2</p>
        </Link>

        <Link to="/day3" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Day 3</h2>
          <p className="text-gray-500">React Router page task3</p>
        </Link>

        <Link to="/day4" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Day 4</h2>
          <p className="text-gray-500">Multi-component, component tree, container vs presentational task 4</p>
        </Link>

        <Link to="/day5" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-amber-400 mb-4">Day 5</h2>
          <p className="text-gray-500">Day 5 - Rendering Methods - Class component only, state, setState, lifecycle (mount/update/unmount)</p>
        </Link>

        <Link to="/day6" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Day 6</h2>
          <p className="text-gray-500">Day 6 - Hooks - UseState WIth rendering Methods</p>
        </Link>

         <Link to="/day7" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-rose-800 mb-4">Day 7</h2>
          <p className="text-gray-500">Day 7 - Batch update - Rendering Methods HOAM</p>
        </Link>


        <Link to="/day8" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-fuchsia-800 mb-4">Day 8</h2>
          <p className="text-gray-500">Day 8 - React UseState Hooks - with Form Handling </p>
        </Link>

        <Link to="/day9" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-cyan-900 mb-4">Day 9</h2>
          <p className="text-gray-500">Day 9 - Higher Order Component (HOC), code reuse patterns </p>
        </Link>

        <Link to="/day10" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-lime-600 mb-4">Day 10</h2>
          <p className="text-gray-500">Day 10 - useState w/ arrays, immutable update, add/remove, state patterns </p>
        </Link>

         <Link to="/day11" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Day 11</h2>
          <p className="text-gray-500">Day 11 - Form Handling - Todo List </p>
        </Link>

        <Link to="/day12" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-rose-200 mb-4">Day 12</h2>
          <p className="text-gray-500">Day 12 - "Form Handling: controlled input, multi-field, error handling Event Handling, Controlled In </p>
        </Link>

        <Link to="/specialtask" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Special Task</h2>
          <p className="text-gray-500">Test & Task to create a Form</p>
        </Link>

        <Link to="/day13" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-4">Day13</h2>
          <p className="text-gray-500">UseEffect</p>
        </Link>

         <Link to="/day14" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-cyan-500 mb-4">Day14</h2>
          <p className="text-gray-500">Search and select category</p>
        </Link>

        <Link to="/day15" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Day15</h2>
          <p className="text-gray-500"> Filter by Sort, Search, Category</p>
        </Link>

        <Link to="/day16" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">Day16</h2>
          <p className="text-gray-500"> Todo & Fetch Data_1</p>
        </Link>

         <Link to="/day17" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">Day17</h2>
          <p className="text-gray-500">Day 17 - useRef, controlling focus, refs for values, useImperativeHandle</p>
        </Link>

        <Link to="/day18" className="bg-white w-72 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">Day18</h2>
          <p className="text-gray-500">Day 18 - Context API: Provider/Consumer, avoid prop drilling</p>
        </Link>
      </div>
    </div>
    </PageLayout>
    </>

  );
};

export default Home;
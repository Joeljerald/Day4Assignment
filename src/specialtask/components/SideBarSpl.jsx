import { NavLink } from "react-router-dom";

const SideBarSpl = () => {
  return (
    <div className="fixed top-20 left-0 w-72 h-screen bg-slate-900 text-white p-6">

      <NavLink to="/homespl" className={({ isActive }) => `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 ${ isActive ? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`}>Home</NavLink>

      <NavLink to="/book" className={({ isActive }) => `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${
            isActive
              ? "bg-violet-600 text-white font-semibold"
              : "hover:bg-slate-800 hover:text-violet-300"
          }`
        }>
        Book Management
      </NavLink>

      <NavLink to="/contactbook" className={({ isActive }) => `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${ isActive
              ? "bg-violet-600 text-white font-semibold"
              : "hover:bg-slate-800 hover:text-violet-300"
          }`
        }
      >
        Contact Book
      </NavLink>

      <NavLink to="/course" className={({ isActive }) =>`block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300" }`
        }
      >
      Course Enrollment
      </NavLink>

      <NavLink to="/employee"
        className={({ isActive }) =>
          `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
        ${isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`
        }
      >
      Employee Management
      </NavLink>

      <NavLink to="/job" className={({ isActive }) =>`block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`
        }
      >
      Job Application
      </NavLink>

      <NavLink to="/patient" className={({ isActive }) => `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${isActive ? "bg-violet-600 text-white font-semibold" : "hover:bg-slate-800 hover:text-violet-300" }`
        }
      >
      Patient Registration
      </NavLink>

      <NavLink to="/product" className={({ isActive }) => `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`
        }
      >
        Product Registration
      </NavLink>

      <NavLink to="/student" className={({ isActive }) => `block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`
        }
      >
      Student Registration
      </NavLink>

      <NavLink to="/user" className={({ isActive }) =>`block px-4 py-3 mb-2 rounded-lg transition-all duration-300 
      ${isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`
        }
      >
      User Registration
      </NavLink>

      <NavLink to="/vechile" className={({ isActive }) => `block px-4 py-3 rounded-lg transition-all duration-300 
      ${ isActive? "bg-violet-600 text-white font-semibold": "hover:bg-slate-800 hover:text-violet-300"}`
        }
      >
      Vehicle Registration
      </NavLink>

    </div>
  );
};

export default SideBarSpl;
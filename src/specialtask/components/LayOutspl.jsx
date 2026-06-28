import { Outlet } from "react-router-dom";
import NavBarSpl from "./NavBarSpl";
import SideBarSpl from "./SideBarSpl";

const LayOutspl = () => {
  return (
    <div className="bg-slate-100">

      <NavBarSpl />
      <SideBarSpl />
      <div className="ml-72 pt-24 p-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default LayOutspl;
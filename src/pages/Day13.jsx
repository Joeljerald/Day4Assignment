import ClockApplication from "../day13/ClockApplication"
import CounterUpdate from "../day13/CounterUpdate"
import DynamicPageTitle from "../day13/DynamicPageTitle"
import PageLoad from "../day13/PageLoad"
import Timer from "../day13/Timer"
import UserDataFetch from "../day13/UserDataFetch"

const Day13 = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        <ClockApplication />
        <UserDataFetch />
        <DynamicPageTitle />
        <Timer />
        <CounterUpdate />
        <PageLoad />
      </div>
    </div>
  );
};


export default Day13
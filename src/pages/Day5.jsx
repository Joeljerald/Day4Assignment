import ClassComponent from "../day5/ClassComponent"
import Lifecycle from "../day5/Lifecycle"
import Count from "../day5/Count";
import ArrayOfObject from "../day5/ArrayOfObject";
import UserObject from "../day5/UserObject";
import SyntaxUsestate from "../day5/SyntaxUsestate";

const Day5 = () => {
  return (
    <div className="grid grid-cols-1">
    <ClassComponent/>
    <Lifecycle/>
    <SyntaxUsestate/>
    <Count/>
    <UserObject/>
    <ArrayOfObject/>

    </div>
  )
}

export default Day5
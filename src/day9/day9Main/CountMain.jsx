import Counted from "../components/Counted";
import withCount from "../hoc/withCount";

const EnhancedCount = withCount(Counted);

const CountMain = () => {
  return (
    <>
    <div >
      <EnhancedCount />
      </div>
    </>
  );
};

export default CountMain;
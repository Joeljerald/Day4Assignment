import Counted from "../components/counted";
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
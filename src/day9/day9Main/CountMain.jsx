import Count from "../components/count";
import withCount from "../hoc/withCount";

const EnhancedCount = withCount(Count);

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
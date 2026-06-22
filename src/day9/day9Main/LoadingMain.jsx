import Loading from "../components/Loading"
import withLoading from "../hoc/withLoading"

const EnhancedLoading=withLoading(Loading);
const LoadingMain = () => {
  return (
    <div>
        <EnhancedLoading/>
    </div>
  )
}

export default LoadingMain
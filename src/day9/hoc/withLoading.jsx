import { useState } from "react";

const withLoading = (WrappedLoading) => (props) => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isLoading ? (<h1 className="text-3xl font-bold animate-pulse">Loading...</h1>) : (<WrappedLoading {...props} />)}
    </div>
  );
};

export default withLoading;
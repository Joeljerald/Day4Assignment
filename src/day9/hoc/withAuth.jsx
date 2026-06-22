const withAuth = (WrappedAuth) => (props) => {
  return (
    <div className="flex justify-center items-center mt-10 ">
      {props.isLogin ? (<WrappedAuth {...props} />) : (
        <div className="bg-red-100 border border-red-400 p-8 rounded-xl shadow-lg w-80 text-center">
          <h1 className="text-2xl font-bold text-red-600">Please Login First</h1>
        </div>
      )}
    </div>
  );
};

export default withAuth;
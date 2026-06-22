const withUpperCase = (WrappedComponent) => (props) => {
  return (
    <WrappedComponent {...props} text={props.text.toUpperCase()}/>
  );
};

export default withUpperCase;
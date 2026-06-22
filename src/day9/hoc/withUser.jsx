

const withUser = (WrappedComponent) =>(props)=> {
    return (
    <div
    style={{backgroundColor: props.color,
            padding: "20px",
            borderRadius: "10px",
      }}>
    <WrappedComponent {...props}/>
    </div>
    
    )
}

export default withUser
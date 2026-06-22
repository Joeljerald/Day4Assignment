

const withNumber = (WrappedNumber) =>(props)=> {
    let numbers=[];
    for(let i=1;i<=props.number;i++){
        numbers=[...numbers,i]
    }

  return (
    <>
    <WrappedNumber {...props} number={numbers} color={props.color}/>
    </>
  )
}

export default withNumber
import ShoppingContext from "../context/ShoppingContext"


const ShoppingProvider = ({children}) => {

    const shoppingObj=[
 {
   id:1,
   product:"Laptop",
   qty:2
 },
 {
   id:2,
   product:"Mouse",
   qty:1
 }
]

const totalquantity=shoppingObj.reduce((total,e)=>total + e.qty,0)
  return (
    <>
    <ShoppingContext value={{shoppingObj,totalquantity}}>
        {children}
    </ShoppingContext>
    
    </>
  )
}

export default ShoppingProvider
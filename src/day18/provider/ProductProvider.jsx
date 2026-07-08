import ProductContext from "../context/ProductContext"

const ProductProvider = ({children}) => {

    const productObj=[
  {
    id:1,
    title:"Laptop",
    price:50000
  },
  {
    id:2,
    title:"Mobile",
    price:20000
  }
]
  return (
    <>
    <ProductContext.Provider value={{productObj}}>
        {children}

    </ProductContext.Provider>
    
    </>
  )
}

export default ProductProvider
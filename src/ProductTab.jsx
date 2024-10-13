import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
  }
  return (
    <div style={styles}>
      <Product title = "Logitech MM Master" idx={0}/>
      <Product  title = "Apple Pencile (2nd Gen)" idx={1}/>
      <Product title = "Zebronics Zeb-Transformer" idx={2}/>
      <Product title = "Petronics Toad 23" idx={3}/> 
    </div>
  )
}
export default ProductTab;

import Product from "./Product.jsx";

function ProductTab() {
  let features = ["No hang","durable"];
  
  return (
    <>
      <Product Title="Phone"  Price={30000} features={features}/>
      {/* <Product Title="Laptop" Price={98000}/>
      <Product Title="Camera" Price={50000}/>
      <Product Title="Tablet" Price={60000}/> */}
    </>
  )
}
export default ProductTab;

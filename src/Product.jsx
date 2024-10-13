import "./Product.css";
import Price from "./Price.jsx";
function Product({ title, idx }) {
  let oldPrice = ["12,000", "13,999", "1200", "999"];
  let newPrice = ["10,099", "11,999", "999", "799"];
  let Description = [
    ["8000 DPI", "5 Programing Buttons"],
    ["intuitive surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Prointuitive surface"],
    ["Wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;

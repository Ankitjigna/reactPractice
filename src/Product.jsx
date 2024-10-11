import "./Product.css"

function Product({Title ,Price ,features }) {
    // const list = features.map((feature)=><li>{feature}</li>)
    let style = {backgroundColor: Price>=60000 ? "pink":null};
    return (
        <div className="Product" style={style}>
            <h2>{Title}</h2>
            <h3>Price = {Price}</h3>
            {Price>=60000 && <p>Discount of 5%</p> }
            {/* {Price>=60000 ? <p>Discount of 5%</p> : null} */}
            {/* <h4>features = {list}</h4> */}
        </div>
    )
}

export default Product
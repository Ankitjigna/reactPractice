import "./Product.css"

function Product({Title ,Price ,features }) {
    const list = features.map((feature)=><li>{feature}</li>)
    return (
        <div className="Product">
            <h2>{Title}</h2>
            <h3>Price = {Price}</h3>
            <h4>features = {list}</h4>
        </div>
    )
}

export default Product
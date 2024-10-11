import "./Product.css"

function Product({Title ,Price}) {
    return (
        <div className="Product">
            <h2>{Title}</h2>
            <h3>Price = {Price}</h3>
        </div>
    )
}

export default Product
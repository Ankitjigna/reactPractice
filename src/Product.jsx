import "./Product.css"

function Product({Title ,Price ,features,features1 }) {
    return (
        <div className="Product">
            <h2>{Title}</h2>
            <h3>Price = {Price}</h3>
            <h4>features = {features}</h4>
            <h4>features1 = {features1.b}</h4>
        </div>
    )
}

export default Product
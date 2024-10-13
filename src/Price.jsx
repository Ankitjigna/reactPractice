export default function Price({oldPrice ,newPrice}) {
let oldstyles = {
    textDecorationLine:" line-through"
}
let newStyles = {
    fontWeight: "bold"
}
let styles = {
    backgroundColor: "yellow",
    height: "30px",
    borderBottomLeftRadius:"15px",
    borderBottomRightRadius:"15px",
    
}
    return (
        <div style={styles} >
           <span style={oldstyles} >{oldPrice} </span>
           &nbsp; &nbsp;
           <span style={newStyles}>{newPrice} </span>
        </div>
    )
}
export default function MsgBox({userName , textColor}) {
    let style = {color : textColor};
    return (
        <div className="MsgBox" style={style}>
            <h2>Hello ,{userName}</h2>
        </div>
    )
}


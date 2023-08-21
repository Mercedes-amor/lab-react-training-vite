function IdCard(props) {
console.log("props", props)
let heigthCorrect = props.height.toString()[0] + "." + props.height.toString()[1] + props.height.toString()[2]

    let cardStyle ={
    display:"flex",
    margin:"20px",
    padding:"10px",
    border:"2px solid black"
}

let cardBody ={

    marginLeft:"20px",
    textAlign: "left"

}
    return(
        <div style={cardStyle}>
            <img src={props.picture} alt="picture" width="200px" height="auto"/>
            <div style={cardBody}>
                <p><b>Firs Name:</b> {props.firstName}</p>
                <p><b>Last Name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Heigh: </b>{heigthCorrect}m</p>
                <p><b>Birth:</b> {props.birth.toISOString().split("T")[0]}</p>
            </div>

        </div>

    )
}




export default IdCard;
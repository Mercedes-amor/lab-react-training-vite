function Greetings(props) {

    let saludoStyle ={
        display:"flex",
        margin:"20px",
        paddingLeft:"10px",
        border:"2px solid black",
        fontSize: "20px",
    }
    let saludo =""
    if(props.lang=== "de"){
        saludo="Hallo"
    }
    else if(props.lang==="fr"){
        saludo="Bonjour"
    }
    return(
        <div style={saludoStyle}>
            <p>{saludo} {props.children}</p>
        </div>
    )

}


export default Greetings;
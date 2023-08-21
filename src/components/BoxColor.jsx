function BoxColor(props) {
    let color ="rgb("+props.r +","+ props.g + ","+ props.b+")"
    const colorStyle = {
                backgroundColor: color,
                display:"flex",
                width: "900px",
                height: "150px",
                marginLeft:"20px",
                alignItems:"center",
                justifyContent:"center",
                border:"2px solid black",
                margin:"20px",
                fontSize:"40px"
      };

    return(
        <div style={colorStyle}>
            <p>rgb{color}</p>
        </div>
    )

}


export default BoxColor;
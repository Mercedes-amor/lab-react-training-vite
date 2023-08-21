function Random(props) {

let randomNumber= Math.floor(Math.random() * 6)
let randomStyle ={
    display:"flex",
    margin:"20px",
    paddingLeft:"10px",
    border:"2px solid black",
    fontSize: "20px",
}
 return(
    <div style={randomStyle}>
        <p>Random value Between 1 and 6 => {randomNumber}</p>
    </div>
 )
}


export default Random;
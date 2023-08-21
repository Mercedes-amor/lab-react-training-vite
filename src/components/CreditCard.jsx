function CreditCard (props) {


  const creditCardStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    width: "300px",
    borderRadius: "10px",
    textAlign: "left",
    margin: "10px",
    padding:"10px"

  }

  const number ={
    fontSize: "30px",
    textAlign:"center",
    margin: "5px"
  }
  const subDiv = {
    display: "flex",
    gap: "20px",
    margin: "5px"

  }

    return(
              <div style={creditCardStyle}>
                <p>{props.type}</p>
                <h4 style={number}>**** **** **** {props.number.slice(-4)}</h4>
                <div style={subDiv}>
                 <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</p>
                 <p>{props.bank}</p>
            </div>

            <p>{props.owner}</p>

          



        </div>
        
    )
}


export default CreditCard;
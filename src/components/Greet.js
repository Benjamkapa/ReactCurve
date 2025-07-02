import React from "react";

// function Greet() {
//     return <h1>Hello, Anonymityiskey</h1>;
// }

const Greet = props => {
  const {jina, hero} = props
    // console.log(props)
    // props.jina = "Anonymityiskey"
    return (
      <div>
            
        <h1>🤓{jina} en {hero}</h1>
        {/* {props.children} */}
      </div>
    )
}


export default Greet
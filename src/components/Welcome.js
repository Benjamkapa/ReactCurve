import React, { Component } from "react";

class Welcome extends Component {
    render (){
        const {jina, hero} = this.props
        // const {state1, stsate2} = this.state
        return (
            <div>
                <h1>Si the {jina}, ni {hero} </h1>
            </div>
        ) 
        
    }
}

export default Welcome
import React, {Component} from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Rada?'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Safi'
        },
        // () => console.log('state sai ni :' + this.state.message)
    )
    // console.log('state kabla ni  :' + this.state.message)
    }

    
    render (){
        // return <i>Welcome {this.props.jina}, wewe ni {this.props.hero} </i> 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = { () => this.changeMessage()}>👊</button>
            </div>
        ) 
        
    }
}

export default Message
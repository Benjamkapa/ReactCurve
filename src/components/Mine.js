import React, { useState } from "react";

// function Mine() {
//     const [message, setMessage] = useState('Rada?');

//     const changeMessage = () => {
//         setMessage('Safi');
//     };

//     // return <i>Welcome {this.props.jina}, wewe ni {this.props.hero} </i> 
//     return (
//         <div>
//             <h1>{message}</h1>
//             <button onClick={changeMessage}>👊</button>
//         </div>
//     );
// }

// export default Mine












class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Rada?'
        };
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        this.setState({ message: 'Safi' });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>👊</button>
            </div>
        );
    }
}
export default Mine
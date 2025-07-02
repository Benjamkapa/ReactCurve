import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello, Mkapa!</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'hello', className: 'hello-class'}, React.createElement('h1', null, 'Hello, Okombe!'))
}

export default Hello;
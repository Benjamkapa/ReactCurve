import React, { Component } from 'react'

class Maths extends Component {
        constructor () {
            super();

            this.state = {
            count : 0
        }
    }

    reset = () => {
      this.setState ({
        count:0
      })
    }
    numberCount (){
        this.setState ({
          count: this.state.count + 1 
        })
    }
    
  render() {
    return (
      <div>
        <h1>Number {this.state.count}</h1>
        <p><button onClick={()=> this.numberCount()}>Add</button></p>
        <button onClick={()=> this.reset()}>Clear</button>
      </div>
    )
  } 
}

export default Maths

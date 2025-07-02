import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    add () {
    //     this.setState (
    //         {
    //         count: this.state.count + 1
    //     },
    //     () => { console.log('callback:', this.state.count)}

    // )
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
        console.log(this.state.count)
    }
    addfive(){
        this.add()
        this.add()
        this.add()
        this.add()
        this.add()
    }

  render() {
    return (
      <div>
        <h1>Count {this.state.count} </h1>
        <button onClick = {() => this.addfive()}>Add</button>
      </div>
    )
  }
}

export default Counter

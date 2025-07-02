// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import React, { Component} from 'react';
import Maths from './components/Maths';
import FunctionClick from './components/FunctionClick';
// import Message from './components/Message'
// import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import Mine from './components/Mine';

class App extends Component{
  render () {
    return (
      <div className="App">
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <Greet jina='Benjamin' hero="me" />
        <Greet jina='Ayuago' hero='mimi'>This' me</Greet>
        <Greet jina='okombe' hero='wao'>
          <button>Action</button>
        </Greet>
        <Greet jina='mkapa ' hero='yeye'/> 
        <Welcome jina="mkapa" hero="mimi" />
        // <Welcome jina="iJoe" hero="yeye" />*/}
        {/* <Welcome jina="ayuagos" hero="sisi" /> */}
        {/* <Hello />  */}
        {/* <Maths/> */}
        {/* <FunctionClick /> */}
        {/* <Greet jina='Ok`ombe' hero="benja" /> */}
        <ClassClick/>
        {/* <Mine/> */}
      </div>
    )
  }
}

export default App;

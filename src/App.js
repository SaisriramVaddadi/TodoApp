import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import FirstComponent, {FirstComponent1} from './components/learning-examples/FirstComponent';
import SecondComponent from './components/SecondComponent';
// import Counter from './components/counter/Counter';
import TodoApp from './components/Todo/Todo'
class App extends Component {
  render(){
    return(
      <div className="App">
        {/* <Counter/> */}
        <TodoApp></TodoApp>
      </div>
      
    )
  }
}

export  class LearnComp extends Component {
  render() {
    return (
      <div>
        <FirstComponent/>
         <FirstComponent1></FirstComponent1>
         <SecondComponent/>
      </div>
    )
  }
}




export default App;

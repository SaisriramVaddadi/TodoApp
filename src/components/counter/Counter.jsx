import React, { Component } from 'react'
import './Counter.css'
import PropTypes from 'prop-types';

export default class Counter extends Component{

    constructor() {
        super();
        this.state = {

            counter: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment(by) {
        // console.log(`increment from parent ${by}`)
        this.setState(
            {
             counter: this.state.counter + by
            }
        )
    }
    decrement(by) {
        
        if(this.state.counter < 0) {
            this.setState({
                counter: 0,
            })
        }
        else{
            this.setState({
                counter: this.state.counter - by
            })
        }
    }

    reset() {
        this.setState({
            counter:0
        })
    }

    render() {
        return (
            <div className="Counter">
            <CounterButton by={1} incrementMethod = {this.increment} decrementMethod={this.decrement} />
            <CounterButton by={10} incrementMethod = {this.increment}decrementMethod={this.decrement}/>
            <CounterButton by= {15} incrementMethod = {this.increment}decrementMethod={this.decrement}/>
            <h1>{this.state.counter}</h1>
            <div><button onClick={this.reset}className="reset-Button" >reset Button</button></div>
            
            </div>
        );
      }
}
 export class CounterButton extends Component {
    // Define initial state in constructor 

    render() {

        return (  
    
         <div className ="CounterButton">
             {/* {(this.props.by === 0)?(<button onClick={this.reset} >+{this.props.by}</button>)
               : (<button onClick={this.increment} >+{this.props.by}</button>)  
             } */}
             <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
             <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
        </div>
        )
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {

    by: PropTypes.number
}






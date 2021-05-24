import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

// Parent level
class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count"> {this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }

    increment(by) {
        // console.log(`increment from child - ${by}`);
        this.setState((previousState) => {
            return { counter: previousState.counter + by }
        });
    }

    decrement(by) {
        // console.log(`increment from child - ${by}`);
        this.setState((previousState) => {
            return { counter: previousState.counter - by }
        });
    }

    reset() {
        this.setState( { counter: 0 });
    }
}

class CounterButton extends Component {
    // Define the initial state in a constructor
    /*constructor() {
        super();
        this.state = {
            counter: 0
        };
        // The increment method did not have the state available, so we bind the increment method inside the class
        // Converting render() { ... } to  render = () => {...} we no longer need this binding
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }*/

    // state => counter 0 

    // The arrow function prevents the need to use the binding
    // render = () => {
    render() {
        /*const style = {
            fontSize: "50px",
            padding: "15px 30px"
        };*/
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+ {this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>- {this.props.by}</button>
                {/* <span className="count" style={style}> {this.state.counter}</span> */}
            </div>
        );
    }

    // Update state counter
    /*increment() {
        this.setState((prevState) => {
            return { counter: prevState + this.props.by }
        });
        this.props.incrementMethod(this.props.by);
    }

    decrement() {
        this.setState((prevState) => {
            return { counter: prevState - this.props.by }
        });
        this.props.decrementMethod(this.props.by);
    }*/
}
// Adding default props values
CounterButton.defaultProps = { by: 1 };

// Checking props type
CounterButton.propTypes = { by: PropTypes.number }

export default Counter;
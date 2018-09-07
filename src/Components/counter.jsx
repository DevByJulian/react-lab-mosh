import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10,
        // tags: []
        tags: ['tag1', 'tag2', 'tag3', 'tag4']

    }



    render() {

        return (
            <div>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-primary btn-sm">Decrement</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            </div>
        );

    }


// changing this to an arrow function would solve the 'this' issue w/o the need for constructor binding
    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    //more succint arrow funtion
    handleDecrement = () => this.setState({count: this.state.count - 1})



    formatCount = () =>{
const { count } = this.state;
return count === 0 ? 'Zero' : count
    
    }
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += (this.state.count === 0) ? "warning" : "primary"
      return classes
    }
    
}



export default Counter;
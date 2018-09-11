import React, { Component } from 'react';

class Counter extends Component {
  
    render() {
       

        return (
            <div>
            
            {/*// the below example is for demonstrating how props.children works.
            //Theis example easily have been achieved by using props. props.children are best used for complex objects 
            {this.props.children}*/}
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-primary btn-sm">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            </div>
        );

    }




    formatCount = () =>{
const { value } = this.props.counter;
return value === 0 ? 'Zero' : value
    
    }
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
      return classes
    }
    
}



export default Counter;
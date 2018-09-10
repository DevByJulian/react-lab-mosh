import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
       

    }



    render() {
        
        console.log(this.props.children)

        return (
            <div>
            {/*// the below example is for demonstrating how props.children works.
            //Theis example easily have been achieved by using props. props.children are best used for complex objects */}
            <h1>{this.props.children}</h1>
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={this.handleDecrement} className="btn btn-primary btn-sm">Decrement</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

            </div>
        );

    }


// changing this to an arrow function would solve the 'this' issue w/o the need for constructor binding
    handleIncrement = (productId) => {
        this.setState({value: this.state.value + 1})
    }

    //more succint arrow funtion
    handleDecrement = () => this.setState({value: this.state.value - 1})



    formatCount = () =>{
const { value } = this.state;
return value === 0 ? 'Zero' : value
    
    }
    getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += (this.state.value === 0) ? "warning" : "primary"
      return classes
    }
    
}



export default Counter;
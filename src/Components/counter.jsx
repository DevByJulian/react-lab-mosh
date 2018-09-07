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
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>

            </div>
        );

    }


// changing this to an arrow function would solve the 'this' issue w/o the need for constructor binding
    handleIncrement = () => {
        console.log(this);
    }
}

export default Counter;
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
            {this.state.tags.length === 0 && <p>There are no tags!!!</p>}
            <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
               
            </div>
        );

    }

 
}

export default Counter;
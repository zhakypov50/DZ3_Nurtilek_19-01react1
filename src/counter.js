import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    };

    func = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };
    render() {
        return(
            <div>
                <h1>Counter</h1>
                <button onClick={this.func}>Count: {this.state.count}</button>
            </div>
        );
    };
}

export default Counter;
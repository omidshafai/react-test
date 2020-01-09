import React from 'react'

export default class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            inputValue: ""
        }

        this.addCounter = this.addCounter.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    addCounter(e, p2) {
        console.log(e.target);
        console.log(p2);
        this.setState((state, props) => ({
            counter: state.counter + 1
        }));
    }

    handleChangeInput(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    componentDidMount() {
        console.log("Component productList Did Mount");
    }

    componentWillUnmount() {
        console.log("Component productList Will Unmount");
    }

    render() {
        return (
            <div>
                {this.props.children}
                {this.props.itemCount}
                <p>
                    inner counter (manual) : {this.state.counter}
                </p>
                <input type="button" value="add counter" onClick={(e) => this.addCounter(e, "param2")} />

                <p>if manual counter is grater than 10 I will hello to you!</p>
                <SayHello name={this.state.counter >= 10 ? 'Omid' : null}/>

                <p>
                    outer counter (auto) : {this.props.outerCounter}
                </p>

                <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/>

                <p>
                    input value : {this.state.inputValue}
                </p>

                {this.props.footer}
            </div>
        );
    }
}

class SayHello extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        if (!this.props.name) {
            return null;
        }
        return <h3>Hello {this.props.name}</h3>;
    }
}
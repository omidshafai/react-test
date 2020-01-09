import React from 'react';
import './App.css';
import ProductList from './components/productList.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 1000
    };
  }

  tick() {
    this.setState((state, props) => ({
      counter: state.counter - 1
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className=''>
        <ProductList itemCount={5} footer={
          <h6>this is footer</h6>
        } outerCounter={this.state.counter}>
          <h3>The product list is here: </h3>
        </ProductList>
      </div>
    );
  }
}

export default App;

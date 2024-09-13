import './App.css';

function App() {
  return (
    <div className="App">
      Original Code:
      import React from 'react'; 
const Greeting = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};
Converted Code:
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

Code 02: Class Component
Original Code:
import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 
Converted Code:
import React, { Component } from 'react';

// Step 1: Define State Type
interface CounterState {
  count: number;
}

// Step 2: Apply the state type to the class component
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0
  }; 
  
  // Step 3: Add return type to the method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  
  render() {
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
}

export default Counter;



      </header>
    </div>
  );
}

export default App;

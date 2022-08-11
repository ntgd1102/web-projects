import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ThemeContext = React.createContext('light');

export class App2 extends React.Component {
  constructor() {
    super();

    this.state = {
      number: 0,
    };
  }

  handleClick = () => {
    // you must use callback function to set the class field
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };

  // with class instance field, you don't need to bind.

  render() {
    console.log(this.state.number);
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar number={this.state.number} />
        <Button onClick={this.handleClick}>Click Me</Button>
      </ThemeContext.Provider>
    );
  }
}

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar({ number }) {
  return (
    <div>
      {number}
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;

  render() {
    return <button>{this.context}</button>;
  }
}

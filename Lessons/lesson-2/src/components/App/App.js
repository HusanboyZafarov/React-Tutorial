import { Component } from "react";
import NavbarWithClass from "../Navbar/NavbarWithClass";


class App extends Component {
  componentDidMount() {
    console.log('App mounted!');
  }
  componentDidUpdate() {
    console.log('App updated!');
  }
  render() {
    return <div className="App">
      <NavbarWithClass />
    </div>;
  }
}

export default App;

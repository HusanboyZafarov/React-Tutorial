import { Component } from "react";
import NavbarWithClass from "../Navbar/NavbarWithClass";
import Navbar from "../Navbar/Navbar";

class App extends Component {
  componentDidMount() {
    console.log('App mounted!');
  }
  componentDidUpdate() {
    console.log('App updated!');
  }
  render() {
    return <div className="App">
      <Navbar />
    </div>;
  }
}

export default App;

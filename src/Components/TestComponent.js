import { Component } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };

class TestComponent extends Component{
    render(){
        return(
            <div>
            <h2>This is a Test Component</h2>
            <button class="btn btn-dark"><Link to="/" style={linkStyle}>Back</Link></button>
            </div>
        )
    }
}

export default TestComponent
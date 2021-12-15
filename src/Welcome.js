import { Component } from "react/cjs/react.production.min";
import React from 'react';


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>Hola {this.props.name}</h1>
            </div>
         );
    }
}
 
export default Welcome;
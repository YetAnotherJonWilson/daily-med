import React, { Component } from 'react'
import './Number.css'

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {type: ['File Number']};
        // this.playFile = this.playFile.bind(this)
    }

    // playFile() {
    //
    // }

    render() {
    return (
        <div className="Number">
            {this.state.type} {this.props.name}
            <br/>
            <button onClick={this.frenchify}>Play File</button>
        </div>
    )
}}

export default Number
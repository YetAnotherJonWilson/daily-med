import React, { Component } from 'react'
import './Number.css'

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {type: ['Number']};
        this.frenchify = this.frenchify.bind(this)
    }

    frenchify() {
        this.setState({type: 'Le nombre'})
    }

    render() {
    return (
        <div className="Number">
            {this.state.type} {this.props.name}
            <br/>
            <button onClick={this.frenchify}>Frenchify</button>
        </div>
    )
}}

export default Number
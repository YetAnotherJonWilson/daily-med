import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {type: ['Header']};
        this.frenchify = this.frenchify.bind(this)
    }

    frenchify() {
        this.setState({type: 'La tete'})
    }

    render() {
    return (
        <div className="Header">
            {this.state.type} {this.props.name}
            <br/>
            <button onClick={this.frenchify}>Frenchify</button>
        </div>
    )
}}

export default Header
import React, { Component } from 'react'
import Number from './Number'
import './ComponentList.css'

class ComponentList extends Component {

    constructor(props) {
        super(props);
        this.state = {number: ['One', 'Two', 'Three']};
    }

    renderGoal() {
        return this.state.number.map(number => (
            <Number key={number} name={number}/>
        ));
    }

    render() {
        return (
            <div className="ComponentList">
                {this.renderGoal()}
            </div>
        );
    }
}
export default ComponentList;
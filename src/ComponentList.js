import React, { Component } from 'react'
import Header from './Header'
import './ComponentList.css'

class ComponentList extends Component {

    constructor(props) {
        super(props);
        this.state = {location: ['Here', 'There', 'Everywhere']};
    }

    renderHeader() {
        return this.state.location.map(location => (
            <Header key={location} name={location}/>
        ));
    }

    render() {
        return (
            <div className="ComponentList">
                {this.renderHeader()}
            </div>
        );
    }
}
export default ComponentList;
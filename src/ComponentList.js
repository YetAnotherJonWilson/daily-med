import React, { Component } from 'react'
import Header from './Header'
import './ComponentList.css'

class ComponentList extends Component {

    render() {
        return (
            <div className="ComponentList">
                <Header name="Here"/>
                <Header name="There"/>
            </div>
        );
    }
}
export default ComponentList;
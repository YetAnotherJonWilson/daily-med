import React, { component } from 'react'
import Header from './Header'

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
export default HelloWorldList;
import React, { Component } from 'react';
import nav from "./Nav";

export class NavItem extends Component {
    render() {
        const {id,title,link} = this.props.navItem;
        return this.props.NavItem.map(nav) (
            <div>
                <p>{title}</p>
            </div>
        )
    }
}

export default NavItem

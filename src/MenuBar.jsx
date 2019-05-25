import React from 'react';
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

export default class MenuBar extends React.Component {
    state = {
        collapsed: false,
    };

    handleMenuSelected=(e)=> {
        this.props.changeTabIndex&&this.props.changeTabIndex(e.key)
    };

    render() {
        return (
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={false}
                    onSelect={this.handleMenuSelected}
                >
                    <Menu.Item key="1">
                        <Icon type="desktop" />
                        <span>Table</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="pie-chart" />
                        <span>chart</span>
                    </Menu.Item>
                </Menu>
        );
    }
}

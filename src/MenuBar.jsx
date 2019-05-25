import React from 'react';
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

export default class MenuBar extends React.Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
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

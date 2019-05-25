import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import Bar from './components/bar/bar'
import MenuBar from './MenuBar'
import TableContainer from './TableContainer'
import ChartContainer from './components/chartContainer/chartContainer'
import { Layout } from 'antd';


class App extends React.Component{

    state={
        tabIndex: "1"
    };

    changeTabIndex=(index)=> {
        this.setState({
            tabIndex:index
        })
    };

    render() {
            let container=<TableContainer/>;
            if(this.state.tabIndex==='1'){
                container = <TableContainer/>;
            }else {
                container = <ChartContainer/>;
            }

        return (
            <div>
                <Bar/>
                <div className="flex-rl">
                    <div className="flex-2"><MenuBar changeTabIndex={this.changeTabIndex}/></div>
                    <div className="flex-8">
                        {container}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

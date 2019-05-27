import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import TopBar from './components/topBar/bar'
import MenuBar from './components/menuBar/MenuBar'
import TableContainer from './components/tableContainer/TableContainer'
import ChartContainer from './components/chartContainer/chartContainer'

class App extends React.Component {

  state = {
    tabIndex: "1"
  };

  changeTabIndex = (index) => {
    this.setState({
      tabIndex: index
    })
  };

  render() {
    return (
      <div className="demo-app">
        <TopBar/>
        <div className="flex-container">
          <div className="flex-left">
            <MenuBar changeTabIndex={this.changeTabIndex}/>
          </div>
          <div className="flex-right">
            {this.state.tabIndex === '1'
              ? (<TableContainer/>)
              : (<ChartContainer/>)
            }
        </div>
      </div>
      </div>
    );
  }
}

export default App;

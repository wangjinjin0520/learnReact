import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import Bar from './components/bar/bar'
import MenuBar from './MenuBar'
import TableContainer from './TableContainer'
import ChartContainer from './components/chartContainer/chartContainer'
import { Layout } from 'antd';


function App() {

  return (
      <div>
          <Bar/>
          <div className="flex-rl">
              <div className="flex-2"><MenuBar /></div>
              <div className="flex-8"><ChartContainer/></div>
          </div>
      </div>
  );
}

export default App;

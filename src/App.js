import React from 'react';
import Table from './components/Table/DynamicTables';
import GetOnlinePosts from './components/OnLinePosts/GetOnLinePosts';

import localJson from './components/LocalPosts/local.json'


export default class App extends React.Component {
    constructor(props){
      super(props);

      this.state = localJson;
    }
    
    
    render() {
        
        
        return (
          <div className="App">
            Hello, React
            <br/> Table 1 data
            <Table data={this.state}/>
            
            <br/> Table 2 data
            <GetOnlinePosts/>
          </div>
          
        );
    }
    
   
}

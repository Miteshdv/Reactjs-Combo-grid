import React from 'react';
import DataGridContainer from '../containers/DataGridContainer.js';
import Container from 'react-layout-components';
import Box from 'react-layout-components';
import Combobox  from 'react-widgets/lib/Combobox';
import  'react-widgets/lib/less/react-widgets.less';

class App extends React.Component {

   
   render() {

       var options = [
           {id:1,name:'red'},
           {id:2,name:'blue'},
           {id:3,name:'green'},
           {id:4,name:'purple'}
       ]
      return (

      	 <Box width ="63.5%" height ={300} column>

             <DataGridContainer height = {300}/>



      	
      	 </Box>
         
        
      );
   }
}



export default App


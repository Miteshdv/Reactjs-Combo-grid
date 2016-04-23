import React from 'react';
import DataGridContainer from '../containers/DataGridContainer.js';
import Container from 'react-layout-components';
import Box from 'react-layout-components';
import Combobox  from 'react-widgets/lib/Combobox';
import  'react-widgets/lib/less/react-widgets.less';

class App extends React.Component {

   
   render() {
      return (

      	 <Box width ="52%" height ={300} column>

            <DataGridContainer height = {300}/>

      	
      	 </Box>
         
        
      );
   }
}



export default App


import React from 'react';
import ReactDOM from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import Container from 'react-layout-components';
import Box from 'react-layout-components';
import Combobox  from 'react-widgets/lib/Combobox';

class DataGridView extends React.Component{
	
	constructor() {
		 super()
		 
	      this.state = { 
	      colors: [],   
			agDataGridColumns:[
				{headerName: "Reditt Createer", field: "author" ,width:200},
				{headerName: "Created on", field: "created",width:200 , cellRenderer: function(params) {




						var monthNames = [
						  "January", "February", "March",
						  "April", "May", "June", "July",
						  "August", "September", "October",
						  "November", "December"
						];

						var date = new Date(params.value*1000);
						var day = date.getDate();
						var monthIndex = date.getMonth();
						var year = date.getFullYear();
						var formattedDate = day + ' ' + monthNames[monthIndex] + ' ' + year
						return formattedDate

					}
				},
				{headerName: "URL", field: "url",width:200 ,cellRenderer: function(params) {

					return '<a href='+params.value+' target="_blank">'+params.value+'</a>'
				}},
				{
					headerName: "Values", width:200 ,cellRenderer:function(params)
					{
						 var eParentElement = params.eParentOfValue ;
						 var comboStyle = {height:22, padding :2}
						 var options = [
										  {id:1,name:'red'},
								      			  {id:2,name:'blue'},
								      			  {id:3,name:'green'},
								      			  {id:4,name:'purple'}
										]

						ReactDOM.render(
							<Combobox value = "green" valueField = 'id' textField = 'name' data ={options}/>, eParentElement);
						params.addRenderedRowListener('renderedRowRemoved', function () {
											            ReactDOM.unmountComponentAtNode(eParentElement);
											        });

						return null;
					}

				}

			]
	        }

     }

     

     gridReady()
     {	
     	//debugger
     	//this.reactDG.showLoading(true);
     	this.props.loadGridData()
     }

	

	render(){
		return  (		
					    <Container width ="100%" height ="100%">
						    <div className="ag-fresh" style = {{"width":"100%","height":300}}>
							    <AgGridReact
							    	ref={(ref) => this.reactDG = ref} 	
							    	suppressLoadingOverlay= {true}
							    	onGridReady = {this.gridReady.bind(this)}	
							    	rowData = {this.props.gridData}					    	
								    // column definitions and row data are immutable, the grid
								    // will update when these lists change
								    columnDefs={this.state.agDataGridColumns}
								    rowHeight="38"								    
								/>
							</div>
						</Container>
					
				    );
	}
}


DataGridView.propTypes = {  
  loadGridData: React.PropTypes.func,
  gridData:React.PropTypes.Array
}

export default DataGridView


	
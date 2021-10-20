import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "./DataTable.css";
const pagination = paginationFactory({
    sizePerPageList: [{
        text: '5th', value: 5
    }, {
        text: '10th', value: 10
    }]
})


const { SearchBar } = Search;
function DataTable(props) {
    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          // sessionStorage.setItem("selectedPatientRow" , JSON.stringify(row));
         /// props.history.push('/patient-profile-dashboard')
        }
      };
    return (

        <ToolkitProvider
            columns={props.columns}
            data={props.data}
            keyField='dummy_field'
            
         
        >
            {
                
                dataProps => (
                    <div>
                        {props.search && <SearchBar {...dataProps.searchProps} />}
                        <BootstrapTable
                            {...dataProps.baseProps}
                            pagination={props.data.length > 5 ? pagination : ""}
                            rowEvents={props.rowEvents}

                        />
                    </div>
                )
            }
        </ToolkitProvider>
    )

}
export default DataTable;

DataTable.defaultProps = {
    rowEvents: {
        onClick: (e, row, rowIndex) => {

        }
    },
    search : false
};
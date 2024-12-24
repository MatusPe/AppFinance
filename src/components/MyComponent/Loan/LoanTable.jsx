import {AgGridReact} from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useMemo, useState} from "react"; // Optional Theme applied to the Data Grid
import '../CSS/DateTable.css';

import FormTransaction from "@/components/MyComponent/Expenses/FormTransaction.jsx";


const LoanData = () => {




    // Row Data: The data to be displayed.
     const [rowData, setRowData] = useState([
         { "Loan Name": "Home Loan",  Lender: "Bank A", "Amount": 200000, "IR": 3.5, Term: 30, "Loan Commencement": "1.5.2022", "Loan Maturity": "1.5.2052", "Monthly Payment": 898, "Total Payment": 323280, Status: "Active", Description: "Residential home loan" },
         { "Loan Name": "Car Loan",  Lender: "Bank B", "Amount": 25000, "IR": 4.2, Term: 5, "Loan Commencement": "3.7.2023", "Loan Maturity": "3.7.2028", "Monthly Payment": 461, "Total Payment": 27660, Status: "Active", Description: "Car purchase loan" },
         { "Loan Name": "Personal Loan",  Lender: "Bank C", "Amount": 15000, "IR": 5.0, Term: 10, "Loan Commencement": "8.10.2021", "Loan Maturity": "8.10.2031", "Monthly Payment": 159, "Total Payment": 19080, Status: "Completed", Description: "Debt consolidation loan" },
         { "Loan Name": "Student Loan",  Lender: "Bank D", "Amount": 40000, "IR": 3.8, Term: 15, "Loan Commencement": "11.1.2022", "Loan Maturity": "11.1.2037", "Monthly Payment": 291, "Total Payment": 52380, Status: "Active", Description: "Educational loan" },
         { "Loan Name": "Mortgage",  Lender: "Bank E", "Amount": 350000, "IR": 2.9, Term: 25, "Loan Commencement": "6.4.2020", "Loan Maturity": "6.4.2045", "Monthly Payment": 1614, "Total Payment": 484200, Status: "Active", Description: "Home mortgage loan" },
         { "Loan Name": "Business Loan",  Lender: "Bank F", "Amount": 100000, "IR": 6.5, Term: 10, "Loan Commencement": "5.2.2021", "Loan Maturity": "5.2.2031", "Monthly Payment": 1193, "Total Payment": 143160, Status: "Active", Description: "Business expansion loan" },
         { "Loan Name": "Home Loan",  Lender: "Bank G", "Amount": 175000, "IR": 3.0, Term: 20, "Loan Commencement": "4.9.2022", "Loan Maturity": "4.9.2042", "Monthly Payment": 968, "Total Payment": 232320, Status: "Active", Description: "Second home loan" },
         { "Loan Name": "Car Loan",  Lender: "Bank H", "Amount": 20000, "IR": 4.0, Term: 5, "Loan Commencement": "2.3.2023", "Loan Maturity": "2.3.2028", "Monthly Payment": 368, "Total Payment": 22080, Status: "Active", Description: "New car loan" },
         { "Loan Name": "Personal Loan", Lender: "Bank I", "Amount": 8000, "IR": 5.5, Term: 5, "Loan Commencement": "12.12.2020", "Loan Maturity": "12.12.2025", "Monthly Payment": 151, "Total Payment": 9060, Status: "Completed", Description: "Renovation loan" },
         { "Loan Name": "Mortgage",  Lender: "Bank J", "Amount": 250000, "IR": 3.3, Term: 30, "Loan Commencement": "10.5.2023", "Loan Maturity": "10.5.2053", "Monthly Payment": 1084, "Total Payment": 390240, Status: "Active", Description: "Mortgage loan" },
         { "Loan Name": "Business Loan",  Lender: "Bank K", "Amount": 50000, "IR": 7.0, Term: 5, "Loan Commencement": "7.6.2022", "Loan Maturity": "7.6.2027", "Monthly Payment": 986, "Total Payment": 59160, Status: "Active", Description: "Business capital loan" },
         { "Loan Name": "Car Loan",  Lender: "Lender A", "Amount": 30000, "IR": 4.5, Term: 6, "Loan Commencement": "10.3.2023", "Loan Maturity": "10.3.2029", "Monthly Payment": 465, "Total Payment": 27990, Status: "Active", Description: "Loan for car purchase" },
         { "Loan Name": "Mortgage",  Lender: "Lender B", "Amount": 150000, "IR": 3.7, Term: 20, "Loan Commencement": "5.5.2020", "Loan Maturity": "5.5.2040", "Monthly Payment": 843, "Total Payment": 202320, Status: "Active", Description: "Home purchase loan" },
         { "Loan Name": "Personal Loan",  Lender: "Lender C", "Amount": 12000, "IR": 5.2, Term: 3, "Loan Commencement": "2.11.2022", "Loan Maturity": "2.11.2025", "Monthly Payment": 357, "Total Payment": 12852, Status: "Completed", Description: "Personal loan for renovation" },
         { "Loan Name": "Business Loan",  Lender: "Lender D", "Amount": 50000, "IR": 6.0, Term: 10, "Loan Commencement": "9.7.2021", "Loan Maturity": "9.7.2031", "Monthly Payment": 555, "Total Payment": 66600, Status: "Active", Description: "Loan for business expansion" },
         { "Loan Name": "Education Loan",  Lender: "Lender E", "Amount": 30000, "IR": 4.0, Term: 15, "Loan Commencement": "12.1.2021", "Loan Maturity": "12.1.2036", "Monthly Payment": 222, "Total Payment": 39960, Status: "Active", Description: "Loan for tuition fees" },
         { "Loan Name": "Car Loan",  Lender: "Lender F", "Amount": 22000, "IR": 5.3, Term: 4, "Loan Commencement": "3.2.2023", "Loan Maturity": "3.2.2027", "Monthly Payment": 507, "Total Payment": 24288, Status: "Active", Description: "Loan for used car" },
         { "Loan Name": "Mortgage",  Lender: "Lender G", "Amount": 450000, "IR": 2.8, Term: 30, "Loan Commencement": "6.4.2020", "Loan Maturity": "6.4.2050", "Monthly Payment": 1850, "Total Payment": 666000, Status: "Active", Description: "Mortgage loan for new home" },
         { "Loan Name": "Personal Loan",  Lender: "Lender H", "Amount": 8000, "IR": 7.0, Term: 5, "Loan Commencement": "7.10.2022", "Loan Maturity": "7.10.2027", "Monthly Payment": 158, "Total Payment": 9480, Status: "Completed", Description: "Loan for vacation" },
         { "Loan Name": "Business Loan",  Lender: "Lender I", "Amount": 150000, "IR": 5.9, Term: 7, "Loan Commencement": "5.5.2021", "Loan Maturity": "5.5.2028", "Monthly Payment": 2147, "Total Payment": 179940, Status: "Active", Description: "Loan for business purchase" },
         { "Loan Name": "Home Loan",  Lender: "Lender J", "Amount": 250000, "IR": 3.3, Term: 25, "Loan Commencement": "3.12.2020", "Loan Maturity": "3.12.2045", "Monthly Payment": 1157, "Total Payment": 348690, Status: "Active", Description: "Home loan for new construction" },
         { "Loan Name": "Student Loan",  Lender: "Lender K", "Amount": 20000, "IR": 4.5, Term: 10, "Loan Commencement": "8.8.2021", "Loan Maturity": "8.8.2031", "Monthly Payment": 206, "Total Payment": 24720, Status: "Active", Description: "Loan for college education" },
         { "Loan Name": "Car Loan",  Lender: "Lender L", "Amount": 18000, "IR": 5.0, Term: 5, "Loan Commencement": "4.6.2022", "Loan Maturity": "4.6.2027", "Monthly Payment": 339, "Total Payment": 20340, Status: "Active", Description: "Loan for electric car" },
         { "Loan Name": "Mortgage",  Lender: "Lender M", "Amount": 320000, "IR": 3.6, Term: 30, "Loan Commencement": "11.11.2021", "Loan Maturity": "11.11.2051", "Monthly Payment": 1450, "Total Payment": 522000, Status: "Active", Description: "Mortgage for a family home" },
         { "Loan Name": "Personal Loan",  Lender: "Lender N", "Amount": 5000, "IR": 6.0, Term: 2, "Loan Commencement": "10.1.2023", "Loan Maturity": "10.1.2025", "Monthly Payment": 221, "Total Payment": 5304, Status: "Completed", Description: "Emergency loan" },
         { "Loan Name": "Business Loan",  Lender: "Lender O", "Amount": 75000, "IR": 6.7, Term: 10, "Loan Commencement": "6.5.2020", "Loan Maturity": "6.5.2030", "Monthly Payment": 866, "Total Payment": 103920, Status: "Active", Description: "Loan for business inventory" },
         { "Loan Name": "Home Loan",  Lender: "Lender P", "Amount": 500000, "IR": 3.2, Term: 30, "Loan Commencement": "2.2.2021", "Loan Maturity": "2.2.2051", "Monthly Payment": 2165, "Total Payment": 779400, Status: "Active", Description: "Luxury home loan" },
         { "Loan Name": "Car Loan",  Lender: "Lender Q", "Amount": 15000, "IR": 4.8, Term: 5, "Loan Commencement": "5.3.2022", "Loan Maturity": "5.3.2027", "Monthly Payment": 279, "Total Payment": 16740, Status: "Active", Description: "Loan for new car purchase" },
         { "Loan Name": "Mortgage",  Lender: "Lender R", "Amount": 270000, "IR": 3.4, Term: 25, "Loan Commencement": "1.7.2020", "Loan Maturity": "1.7.2045", "Monthly Payment": 1340, "Total Payment": 402000, Status: "Active", Description: "Mortgage for home renovation" },
         { "Loan Name": "Student Loan",  Lender: "Lender S", "Amount": 30000, "IR": 4.2, Term: 10, "Loan Commencement": "4.8.2022", "Loan Maturity": "4.8.2032", "Monthly Payment": 302, "Total Payment": 36240, Status: "Active", Description: "Loan for graduate school" },
         { "Loan Name": "Personal Loan",  Lender: "Lender T", "Amount": 20000, "IR": 5.5, Term: 4, "Loan Commencement": "7.12.2021", "Loan Maturity": "7.12.2025", "Monthly Payment": 467, "Total Payment": 28020, Status: "Completed", Description: "Loan for home improvement" },
    ]);
    const columnsStyle = {
        backgroundColor:'bg-gradient-to-r from-[#3A3535] to-[#1F1B1B]'
    };

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "Loan Name", flex:1, minWidth:120, filter: "agTextColumnFilter", editable: true },

        { field: "Lender", flex:1,minWidth:100, filter: "agTextColumnFilter", editable: true, },
        { field: "Amount", flex:1,minWidth:100,filter: "agNumberColumnFilter", editable: true },
        { field: "IR", flex:1,minWidth:60, filter: "agNumberColumnFilter", editable: true },
        { field: "Term" ,flex:1, minWidth:80,filter: "agNumberColumnFilter", editable: true },
        { field: "Loan Commencement", flex:1,minWidth:100, filter: "agDateColumnFilter", editable: true },
        { field: "Loan Maturity", flex:1,minWidth:100,filter: "agDateColumnFilter", editable: true },
        { field: "Monthly Payment", flex:1,minWidth:110, filter: "agNumberColumnFilter", editable: true },
        { field: "Total Payment" ,flex:1, minWidth:100,filter: "agNumberColumnFilter", editable: true },
        { field: "Status",flex:1, minWidth:100, filter: "agTextColumnFilter", editable: true },
        { field: "Description", flex:2,minWidth:150,filter: "agTextColumnFilter", editable: true },
        {
            width: 35,
            cellRenderer:(params) => {
                return (
                    <button className="m-0 p-0 w-[25px] filter invert hover:scale-110 text-align: center"><img src="./src/assets/edit.svg" /></button>
                )
            }, filter: false,cellStyle: { 'padding': 0,textAlign: 'center',         // Centers content horizontally
                verticalAlign: 'middle'}
        },
        {
            width: 35,
            cellRenderer:(params) => {
                return (
                    <button className=" w-[25px] filter invert hover:scale-110" ><img src="./src/assets/Delete.svg" /></button>
                )
            }, filter: false, cellStyle: { 'padding': 0 ,textAlign: 'center',         // Centers content horizontally
                verticalAlign: 'middle'}
        },
        {
            width: 35,
          cellRenderer:(params) => {
              return (<button className=" w-[25px] filter invert hover:scale-110"><img src="./src/assets/simulation.png"/>
              </button>)
          }, filter: false, cellStyle: { 'padding': 0,textAlign: 'center',         // Centers content horizontally
                verticalAlign: 'middle'}
        }


    ]);
    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',

            wrapText: true,
            autoHeight: true,





        };
    }, []);



    const rowStyle = {
        borderBottom: '2px solid green', backgroundColor:'black',
    };
    const headerStyle = {
        borderBottom: '2px solid green', backgroundColor:'black'
    };



    const rowSelection = {
        mode: 'multiRow',
        headerCheckbox: false,
        bodyCheckbox: false,

    };



    return (<div
        className={
            "ag-theme-quartz-dark border-2 p-1   max-h-full min-w-[660px]  rounded-lg shadow-md border-none overflow-y-scroll mb-8"
        }
        style={{height: 'auto', background: 'linear-gradient(to right, #3A3535, #1F1B1B)', borderRadius: 15}}
    >

            <AgGridReact rowHeight={100}

                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                rowSelection={rowSelection}
                rowStyle={rowStyle}
                columnStyle={columnsStyle}
                autoHeight={true}
                domLayout="autoHeight"

                suppressHorizontalScroll={true}


            />

        </div>
        );

        // ...

        }

        export default LoanData;
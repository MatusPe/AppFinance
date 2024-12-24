import {AgGridReact} from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import {useMemo, useState} from "react"; // Optional Theme applied to the Data Grid
import '../CSS/DateTable.css';

import FormTransaction from "@/components/MyComponent/Expenses/FormTransaction.jsx";


const ExpensesData = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleButtonClick = () => {
        setShowComponent(!showComponent);
    };

    // Row Data: The data to be displayed.
     const [rowData, setRowData] = useState([
        { Category: "Tesla", Name: "Model Y", Sender: "Tesla s.r.o", Price: 64950, Date: "2.12.2022" },
        { Category: "Ford", Name: "F-Series", Sender: "Ford Motor Company", Price: 33850, Date: "15.5.2023" },
        { Category: "Toyota", Name: "Corolla", Sender: "Toyota Motor Corporation", Price: 29600, Date: "10.7.2024" },
        { Category: "Chevrolet", Name: "Bolt EV", Sender: "Chevrolet", Price: 35990, Date: "21.3.2021" },
        { Category: "BMW", Name: "iX3", Sender: "BMW Group", Price: 71000, Date: "8.10.2023" },
        { Category: "Nissan", Name: "Leaf", Sender: "Nissan Motor Co.", Price: 31990, Date: "5.6.2022" },
        { Category: "Audi", Name: "e-tron", Sender: "Audi AG", Price: 86500, Date: "11.1.2023" },
        { Category: "Mercedes-Benz", Name: "EQB", Sender: "Mercedes-Benz AG", Price: 56000, Date: "3.9.2022" },
        { Category: "Volkswagen", Name: "ID.4", Sender: "Volkswagen AG", Price: 41990, Date: "7.8.2021" },
        { Category: "Ford", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 42990, Date: "12.5.2022" },
        { Category: "Hyundai", Name: "Ioniq 5", Sender: "Hyundai Motor Company", Price: 46000, Date: "19.2.2024" },
         { Category: "Mercedes-Benz", Name: "EQB", Sender: "Mercedes-Benz AG", Price: 56000, Date: "3.9.2022" },
         { Category: "Volkswagen", Name: "ID.4", Sender: "Volkswagen AG", Price: 41990, Date: "7.8.2021" },
         { Category: "Ford", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 42990, Date: "12.5.2022" },
         { Category: "Hyundai", Name: "Ioniq 5", Sender: "Hyundai Motor Company", Price: 46000, Date: "19.2.2024" },
         { Category: "Mercedes-Benz", Name: "EQB", Sender: "Mercedes-Benz AG", Price: 56000, Date: "3.9.2022" },
         { Category: "Volkswagen", Name: "ID.4", Sender: "Volkswagen AG", Price: 41990, Date: "7.8.2021" },
         { Category: "Ford", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 42990, Date: "12.5.2022" },
         { Category: "Hyundai", Name: "Ioniq 5", Sender: "Hyundai Motor Company", Price: 46000, Date: "19.2.2024" },
    ]);
    const columnsStyle = {
        backgroundColor:'bg-gradient-to-r from-[#3A3535] to-[#1F1B1B]'
    };

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "Category", width:120, filter: "agTextColumnFilter", editable: true },
        { field: "Name" , width:120,filter: "agTextColumnFilter", editable: true },
        { field: "Sender", width:120, filter: "agTextColumnFilter", editable: true },
        { field: "Price", width:120,filter: "agNumberColumnFilter", editable: true },
        { field: "Date", width:120,  }

    ]);
    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',



        };
    }, []);



    const rowStyle = {
        borderBottom: '2px solid green', backgroundColor:'black'
    };
    const headerStyle = {
        borderBottom: '2px solid green', backgroundColor:'black'
    };



    const rowSelection = {
        mode: 'multiRow',
        headerCheckbox: true,

    };



    return (<div
        className={
            "ag-theme-quartz-dark border-2 p-1   max-h-full min-w-[660px]  rounded-lg shadow-md border-none overflow-y-scroll mb-8"
        }
        style={{height: 'auto', background: 'linear-gradient(to right, #3A3535, #1F1B1B)', borderRadius: 15}}
    >

            <AgGridReact

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



                <div className="sticky bottom-0 float-end w-10 h-10 items-center justify-center text-center bg-white  rounded-3xl mr-4 animate-pulse hover:animate-in" onClick={handleButtonClick}>
                    <img src="src/assets/transaction.svg" alt="Transaction" className="w-full h-full object-contain" />

                </div>

            {showComponent && <FormTransaction />}
        </div>
        );

        // ...

        }

        export default ExpensesData;
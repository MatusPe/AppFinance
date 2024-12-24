import SidebarDemo from "@/components/MyComponent/Expenses/SiderBar.jsx";

import LoanTable from "@/components/MyComponent/Loan/LoanTable.jsx";
import BarChartComponent from "@/components/MyComponent/Loan/BarChart.tsx";
import StatLoan from "@/components/MyComponent/Loan/Statistic.jsx";
import Buttons, {GraphButtons} from "@/components/MyComponent/Loan/Buttons.jsx";
import React, {useState} from "react";


function LoanPage(){

    const [CompareLoan, setCompareLoan] = useState(false)

    const [PieLoan, setPieLoan] = useState(false)

    const [LineLoan, setLineLoan] = useState(false)



    return (<div>
        <div className="flex flex-row"><SidebarDemo></SidebarDemo>
            <div className="flex flex-col w-full h-full p-2 bg-black">
                <div className="flex flex-row">
                    <div
                        className="relative   justify-center  bg-gradient-to-r from-[#3A3535] to-[#1F1B1B]  h-[50vh] w-[85%] rounded-[15px] shadow-md border-green-500 border m-2 overflow-hidden min-h-[270px]">
                        <div className={'  absolute right-0 top-3 mr-0 z-10'}>
                            <div onClick={() => {
                                setCompareLoan(true);
                                setPieLoan(false);
                                setLineLoan(false);
                            }}>
                                <GraphButtons icon={'./src/assets/CompareLoan.png'}></GraphButtons>
                            </div>
                            <div onClick={() => {
                                setCompareLoan(false);
                                setPieLoan(true);
                                setLineLoan(false);
                            }}>
                                <GraphButtons icon={'./src/assets/piecharticon.png'}
                                ></GraphButtons>
                            </div>
                            <div onClick={() => {
                                setCompareLoan(false);
                                setPieLoan(false);
                                setLineLoan(true);
                            }}>
                                <GraphButtons icon={'./src/assets/DecreaseLoan.png'} ></GraphButtons>
                            </div>
                        </div>

                        {CompareLoan && <BarChartComponent></BarChartComponent>}
                    </div>
                    <div className="flex flex-col flex-grow ">
                        <StatLoan text="Active Loan Amount" color="green-500" Number='10000'></StatLoan>
                        <StatLoan text="Loan Balance" color="red-600" Number='5000'></StatLoan>
                        <StatLoan text="Highest IR" color="blue-700" Number={'3%'}></StatLoan>
                        <div className="mt-2 flex flex-row flex-grow justify-between gap-1">
                            <Buttons className='' Text="Simulation"/>
                            <Buttons Text="Display"/>
                        </div>
                    </div>

                </div>
                <div className="w-full ml-2 h-[45vh] ">
                    <LoanTable></LoanTable>
                </div>
            </div>
        </div>
    </div>)
}

export default LoanPage;
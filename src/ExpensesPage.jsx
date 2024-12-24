import SidebarDemo from "@/components/MyComponent/Expenses/SiderBar.jsx";
import ExpensesData from "./components/MyComponent/Expenses/DateTable.jsx";

import {PieChartComponent} from "@/components/MyComponent/Expenses/PieChart.tsx";
import Componentone from "@/components/MyComponent/Expenses/Radial.tsx";
import RadarChart from "@/components/MyComponent/Expenses/RadarChart.tsx";
import RadarComponent from "@/components/MyComponent/Expenses/RadarChart.tsx";




function ExpensesPage(){
    return (<div>
        <div className="flex"><SidebarDemo></SidebarDemo>
            <div className="flex flex-row gap-4 p-4 justify-center  bg-black border-8 border-black w-full max-h-screen overflow-hidden">
                <div className="h-screen w-full flex-col">
                    <div className="  h-[49%]  bg-gradient-to-r from-[#3A3535] to-[#1F1B1B] rounded-[15px] shadow-md border-green-500 border overflow-hidden flex flex-col">
                        <PieChartComponent></PieChartComponent>
                    </div>
                    <div className="h-full flex flex-row w-full">
                    <div
                        className="flex flex-row  h-[42%] mt-4  bg-gradient-to-r from-[#3A3535] to-[#1F1B1B]   w-[50%] mr-4 rounded-[15px] shadow-md border-green-500 border">
                        <Componentone className="h-full  "></Componentone>


                    </div>
                    <div
                        className="flex flex-row  h-[42%] mt-4   bg-gradient-to-r  from-[#3A3535] to-[#1F1B1B]   w-[50%] rounded-[15px] shadow-md border-green-500 border">

                        <RadarComponent ></RadarComponent>


                    </div>
                </div>

                </div>
                <div className="max-sm:hidden max-md:hidden rounded-[9px] border-green-500 border"><ExpensesData/></div>
            </div>
        </div>
    </div>)
}

export default ExpensesPage;
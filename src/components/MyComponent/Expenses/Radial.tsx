

import { TrendingUp } from "lucide-react"
import {LabelList, PolarGrid, RadialBar, RadialBarChart} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import React, {useState} from "react"
import '@/app/globals.css'
import {ButtonArrowLeft, ButtonArrowRight} from "@/components/MyComponent/Expenses/ButtonArrows";

const groupByMonth = (currentYear) => {
    const [data, setRowData] = useState([
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
        { Category: "F", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 42990, Date: "12.3.2024" },
        { Category: "R", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 42990, Date: "12.9.2024" },
        { Category: "K", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 42990, Date: "12.10.2024" },
        { Category: "A", Name: "Mustang Mach-E", Sender: "Ford Motor Company", Price: 100990, Date: "12.12.2024" },

    ]);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return months.reduce((acc, month, index) => {
        // Get total price for the current month
        const monthData = data.filter(item => {
            const date = new Date(item.Date.split('.').reverse().join('-'));
            return date.getFullYear() === currentYear && date.getMonth() === index;
        });

        const totalPrice = monthData.reduce((sum, item) => sum + item.Price, 0);
        acc[month] = totalPrice;

        return acc;
    }, {});
};
const chartConfig = {
    Jan: {
        label: "Jan",
        color: "hsl(var(--chart-11))",
    },
    Feb: {
        label: "Feb",
        color: "hsl(var(--chart-1))",
    },
    Mar: {
        label: "Mar",
        color: "hsl(var(--chart-2))",
    },
    Apr: {
        label: "Apr",
        color: "hsl(var(--chart-3))",
    },
    May: {
        label: "May",
        color: "hsl(var(--chart-4))",
    },
    Jun: {
        label: "Jun",
        color: "hsl(var(--chart-5))",
    },
    Jul: {
        label: "Jul",
        color: "hsl(var(--chart-6))",
    },
    Aug: {
        label: "Aug",
        color: "hsl(var(--chart-7))",
    },
    Sep: {
        label: "Sep",
        color: "hsl(var(--chart-12))",
    },
    Oct: {
        label: "Oct",
        color: "hsl(var(--chart-8))",
    },
    Nov: {
        label: "Nov",
        color: "hsl(var(--chart-9))",
    },
    Dec: {
        label: "Dec",
        color: "hsl(var(--chart-10))",
    },

} satisfies ChartConfig

const transformGroupedData = (selectDate) => {
    const groupedData = groupByMonth(selectDate);
    return Object.keys(groupedData).map((month) => ({
        month: month,
        price: groupedData[month],
        fill: chartConfig[month]?.color || "grey",
    }));
};



function RadialComponent() {

    const [selectedDate, setSelectedDate] = useState(() => {
        const date = new Date();
        date.setFullYear(date.getFullYear());
        return date;
    });

    function HandleSelect(number) {
        const currentDate = new Date();

        if(selectedDate.getFullYear() >= currentDate.getFullYear()&&number!=-1) { return}
        setSelectedDate(new Date(selectedDate.setFullYear(selectedDate.getFullYear() + number)));

    }

    const transformedData = transformGroupedData(selectedDate.getFullYear());  // Get transformed data


    return (
        <Card className="  h-full w-full  border-none">
            <div className="flex flex-row justify-between">
                <div>
                    <ButtonArrowLeft  onClick={() => {HandleSelect(-1)}} ></ButtonArrowLeft>
                    <ButtonArrowRight onClick={() => {HandleSelect(1)}}></ButtonArrowRight>
                </div>
            <CardDescription className=" font-bold mr-2 mb-0 pb-0">Expenses of ${selectedDate.getFullYear()} be month</CardDescription>
            </div>
            <CardContent className="h-[85%] w-full p-0 m-0   ">

                <ChartContainer
                    config={chartConfig}
                    className="   w-full h-full"
                >
                    <RadialBarChart data={transformedData} innerRadius={10} outerRadius={120} >
                        <ChartTooltip
                            cursor={false}


                            content={<ChartTooltipContent
                             hideLabel nameKey="month" labelKey={'price'}/>}

                        />
                        <PolarGrid gridType="circle" />
                        <RadialBar dataKey="price" background>
                            <LabelList
                                position="insideEnd"
                                dataKey="month"
                                className="fill-[#FFFFFF] font-bold"
                                fontSize={14}
                            />
                        </RadialBar>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
export default RadialComponent;
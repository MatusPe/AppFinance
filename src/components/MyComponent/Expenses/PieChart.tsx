import * as React from "react";
import { TrendingUp } from "lucide-react";
import {Label, LabelList, Legend, Pie, PieChart} from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer, ChartLegend, ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { SelectItem } from "@radix-ui/react-select";
import {Select, SelectContent, SelectTrigger, SelectValue} from "@/components/ui/select";
import {meta} from "eslint-plugin-react/lib/rules/jsx-props-no-spread-multi";
import category = meta.docs.category;

const chartData = [
    { category: "Tesla", price: 64950, fill: "rgba(0, 209, 255, 1)", date: "2024-01-15" },
    { category: "Ford", price: 33850, fill: "rgba(29, 29, 29, 1)", date: "2024-02-10" },
    { category: "Toyota", price: 29600, fill: "rgba(163, 0, 214, 1)", date: "2024-03-05" },
    { category: "Chevrolet", price: 35990, fill: "rgba(76, 175, 80, 1)", date: "2024-04-20" },
    { category: "BMW", price: 71000, fill: "rgba(255, 64, 129, 1)", date: "2024-05-18" },
    { category: "Nissan", price: 31990, fill: "rgba(158, 158, 158, 1)", date: "2024-06-25" },
    { category: "Audi", price: 86500, fill: "rgba(0, 200, 83, 1)", date: "2024-10-12" },
    { category: "Mercedes-Benz", price: 56000, fill: "rgba(244, 67, 54, 1)", date: "2024-10-30" },
    { category: "Volkswagen", price: 41990, fill: "rgba(96, 125, 139, 1)", date: "2024-10-22" },
    { category: "Hyundai", price: 46000, fill: "rgba(156, 39, 176, 1)", date: "2024-10-15" },

    { category: "Porsche", price: 92000, fill: "rgba(255, 193, 7, 1)", date: "2024-12-01" },
    { category: "Lamborghini", price: 250000, fill: "rgba(255, 87, 34, 1)", date: "2024-12-05" },
    { category: "Ferrari", price: 350000, fill: "rgba(211, 47, 47, 1)", date: "2024-12-10" },
    { category: "Aston Martin", price: 180000, fill: "rgba(103, 58, 183, 1)", date: "2024-12-15" },
    { category: "Maserati", price: 95000, fill: "rgba(33, 150, 243, 1)", date: "2024-12-20" }
];

const chartConfig = {
    price: { label: "Price:" },
    Tesla: { label: "Tesla:", color: "rgba(0, 209, 255, 1)" },
    Ford: { label: "Ford:", color: "rgba(29, 29, 29, 1)" },
    Toyota: { label: "Toyota:", color: "rgba(163, 0, 214, 1)" },
    Chevrolet: { label: "Chevrolet:", color: "rgba(76, 175, 80, 1)" },
    BMW: { label: "BMW:", color: "rgba(255, 64, 129, 1)" },
    Nissan: { label: "Nissan:", color: "rgba(158, 158, 158, 1)" },
    Audi: { label: "Audi:", color: "rgba(0, 200, 83, 1)" },
    "Mercedes-Benz": { label: "Mercedes-Benz: \u00A0 ", color: "rgba(244, 67, 54, 1)" },
    Volkswagen: { label: "Volkswagen:", color: "rgba(96, 125, 139, 1)" },
    Hyundai: { label: "Hyundai:", color: "rgba(156, 39, 176, 1)" },
} satisfies ChartConfig;

function getDatabyDate(data, mouth, year) {
    console.log(data)
    console.log("ratatuj")
        const transformObject= Object.entries(data).filter(([key, value])=>new Date(value.date).getMonth() === (mouth));

    const values = transformObject.map(([key, value]) => value);
        console.log(values)
        return values




}

const month={
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
}

export function PieChartComponent() {


    const [activeMonth, setActiveMonth] = React.useState((new Date().getMonth()+1).toString());
    const [activeYear, setActiveYear] = React.useState(new Date().getFullYear());
    const transformedDate=getDatabyDate(chartData, parseInt(activeMonth,10)-1, activeYear)
    const totalPrice = transformedDate.reduce((acc, curr) => acc + curr.price, 0);


    return (
        <Card className="flex h-full w-full flex-col   border-none">
            <CardHeader className="items-center pb-0 flex-row">

                <Select value={activeMonth} onValueChange={setActiveMonth}>
                    <SelectTrigger
                        className="mr-auto h-6 w-[130px] rounded-3xl pl-2.5   text-white bg-black border-2 border-green-500"

                    >

                        <SelectValue placeholder="Select month" className="text-red-950 ">{new Date(activeMonth).toLocaleString('en-US', { month: 'short' })}</SelectValue>
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl bg-black border-2 border-green-500" >
                        {Object.entries(month).map(([key, value]) => {
                            return (<SelectItem
                                key={key}
                                value={value}
                                className="rounded-lg [&_span]:flex bg-black text-white hover:bg-gradient-to-r  from-[#3A3535] to-[#1F1B1B] hover:rounded-3xl pl-4 m-1"
                                >
                                <div className="flex items-center gap-2 text-xs">

                                    {key}
                                </div>
                            </SelectItem>);
                        })}
                    </SelectContent>
                </Select>
                <CardTitle className="text-white">Monthly spending by Category</CardTitle>

            </CardHeader>
            <CardContent className=" h-[90%] w-full flex-grow   ">
                <ChartContainer
                    config={chartConfig}
                    className=" m-0 p-0  w-full  h-full flex-grow"
                >

                    <PieChart className="flex-col  m-0 p-0   ">
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel/>}
                        />

                        <Pie
                            data={transformedDate}
                            dataKey="price"
                            nameKey="category"
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            strokeWidth={2}
                        >

                            <Label
                                content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"

                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    style={{fill: 'white'}}
                                                    className="fill-foreground text-2xl font-bold "
                                                >
                                                    ${totalPrice.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    style={{fill: 'white'}}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                            <LabelList
                                dataKey="price"
                                className="fill-background"
                                stroke="none"
                                fontSize={10}
                                fontWeight={'bold'}

                                style={{fill: 'white'}}
                                formatter={(value) => {

                                    const total = transformedDate.reduce((sum, entry) => sum + entry.price, 0);

                                    const percentage = ((value / total) * 100).toFixed(2);
                                    return `${percentage}%`;
                                }}


                            />

                        </Pie>
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            wrapperStyle={{paddingLeft: 20}}
                            iconType="circle"
                        />


                    </PieChart>


                </ChartContainer>


            </CardContent>

        </Card>
    );
}

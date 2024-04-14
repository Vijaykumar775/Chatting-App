import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend);

// const Labels = getLastSevenDays()


const lineChartOptions = {
    responsive: true,
    Plugins: {
        legend: {
            dispaly: false,
        },

        label: {
            dispaly: false,
        },
    },

    // scales: {
    //     x: {
    //         grid: {
    //             dispaly: false,
    //         },
    //     },

    //     y: {
    //         beginAtZero: true,
    //         grid: {
    //             dispaly: false,
    //         },
    //     },
    // },
};

const LineChat = ({ value = [] }) => {

    const data = {
        labels: ["January", "February", "March", "April", "May", "june", "july"],
        datasets: [
            {
                data: value,
                label: "Revenue",
                fill: true,
                backgroundColor: "rgba(75,12,192,0.3)",
                borderColor: "rgba(75,12,192,1)",

            },
        ],
    }

    return <Line data={data} options={lineChartOptions} />;
}


const DoughnutChatOptions = {};

const DoughnutChat = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [
            {

                data: value,
                label: "Total charts vs Group Charts",
                backgroundColor: ["rgba(49, 195, 230, 0.74)", "rgba(216, 232, 51, 0.74)"],
                borderColor: ["rgba(0,0 ,0 , 0.74)","rgba(0,0 ,0 , 0.74)"],
                offset:10,
                

            },
        ],
    }

    return <Doughnut style={{zIndex:1}} data={data} options={DoughnutChatOptions}/>
}

export { DoughnutChat, LineChat };


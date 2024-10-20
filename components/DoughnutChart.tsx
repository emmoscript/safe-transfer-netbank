"use client"

import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend, DoughnutControllerChartOptions} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts} : DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1870.15, 2050.30, 1760.00],
                backgroundColor: [
                    '#0747b6',
                    '#2265d8',
                    '#2f91fa'
                ]
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
  
    return <Doughnut
    data={data} 
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
}

export default DoughnutChart
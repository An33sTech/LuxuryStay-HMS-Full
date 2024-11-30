import React, { useEffect, useRef, useState } from 'react';

function RevenueChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("Token not found");
                    return;
                }
                const startDate = '2024-11-22';
                const endDate = '2024-11-24';
                setStartDate(startDate);
                setEndDate(endDate);

                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reports/revenue?startDate=${startDate}&endDate=${endDate}`, {
                    method: "GET",
                    headers: { token: token },
                });
                const data = await response.json();
                setChartData([data.revenue || 0]);
            } catch (error) {
                console.log('Error fetching revenue:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (chartData.length > 0 && startDate && endDate) {
            const options = {
                series: [
                    {
                        name: "Revenue",
                        data: chartData,
                    },
                ],
                chart: {
                    foreColor: "#9ba7b2",
                    height: 350,
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: !1,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 4,
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#ff0080'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: 0.8,
                        opacityTo: 0.1,
                        stops: [0, 100, 100, 100]
                    },
                },
                colors: ["#ffd200"],
                grid: {
                    show: true,
                    borderColor: 'rgba(0, 0, 0, 0.15)',
                    strokeDashArray: 4,
                },
                tooltip: {
                    theme: "dark",
                },
                xaxis: {
                    categories: [startDate, endDate],
                },
                markers: {
                    show: !1,
                    size: 5,
                },
            };

            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, [chartData, startDate, endDate]);

    return (
        <>
            <div id="revenue-chart" ref={chartRef}></div>
        </>
    );
}

export default RevenueChart;

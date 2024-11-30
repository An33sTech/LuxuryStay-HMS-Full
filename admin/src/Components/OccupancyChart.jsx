import React, { useEffect, useRef, useState } from 'react';

function OccupancyChart() {
    const chartRef = useRef(null);
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    const formatDate = (date) => date.toISOString().split('T')[0];
    const [startDate, setStartDate] = useState(formatDate(sevenDaysAgo));
    const [endDate, setEndDate] = useState(formatDate(today));
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!startDate || !endDate) return;
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }

                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reports/occupancy?startDate=${new Date(startDate).toISOString()}&endDate=${new Date(endDate).toISOString()}`, {
                    method: "GET",
                    headers: { token: token },
                });

                const data = await response.json();
                setChartData([data.occupancyRate || 0]);
            } catch (error) {
                console.error('Error fetching occupancy rate:', error);
            }
        };

        fetchData();
    }, [startDate, endDate]);

    useEffect(() => {
        if (chartData.length > 0) {
            const options = {
                series: [
                    {
                        name: "Occupancy Rate",
                        data: chartData,
                    },
                ],
                chart: {
                    foreColor: "#9ba7b2",
                    height: 350,
                    type: 'area',
                    toolbar: {
                        show: !1,
                    },
                    zoom: { enabled: false },
                    dropShadow: {
                        enabled: !0,
                        top: 3,
                        left: 14,
                        blur: 4,
                        opacity: .12,
                        color: "#fc185a"
                    },
                },
                dataLabels: { enabled: false },
                stroke: {
                    curve: "smooth",
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#7928ca'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: 1,
                        opacityTo: 1,
                    },
                },
                colors: ["#ff0080"],
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
            <div className="card rounded-4">
                <div className="card-header py-3">
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-0">Occupancy Rate</h5>
                        <div className="d-flex gap-4 align-items-center justify-content-between">
                            <label className="form-label">From:</label>
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="form-control"></input>
                        </div>
                        <div className="d-flex gap-4 align-items-center justify-content-between">
                            <label className="form-label">To:</label>
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div id="occupancy-chart" ref={chartRef}></div>
                </div>
            </div>

        </>
    );
}

export default OccupancyChart;
import React, { useEffect, useState } from 'react';

function ForecastChart({ roomId }) {
    const [forecastData, setForecastData] = useState({
        series: [],
        categories: []
    });

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }

                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/analytics/forecast/${roomId}`, {
                    method: "GET",
                    headers: { token: token },
                });

                const data = await response.json();
                const forecastedValues = data.forecast.map(item => item.price);
                const forecastDates = data.forecast.map(item => item.date);

                setForecastData({
                    series: [{
                        name: "Forecasted Price",
                        data: forecastedValues
                    }],
                    categories: forecastDates
                });
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, [roomId]);

    useEffect(() => {
        if (forecastData.series.length > 0) {
            const options = {
                series: forecastData.series,
                chart: {
                    foreColor: "#9ba7b2",
                    height: 400,
                    type: 'line',
                    zoom: { enabled: false },
                },
                stroke: {
                    width: 2,
                    curve: 'smooth'
                },
                xaxis: {
                    categories: forecastData.categories,
                    title: {
                        text: 'Date'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Value'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#00c6fb'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: 0.8,
                        opacityTo: 0.3,
                    },
                },
                tooltip: {
                    theme: 'dark',
                }
            };

            const chart = new ApexCharts(document.querySelector("#forecast-chart"), options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, [forecastData]);

    return (
        <>
            <div id="forecast-chart"></div>
        </>
    );
}

export default ForecastChart;
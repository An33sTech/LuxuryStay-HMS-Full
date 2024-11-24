import React, { useEffect, useState } from 'react';

function PricingChart() {
    const [chartData, setChartData] = useState({
        series: [],
        categories: []
    });

    useEffect(() => {
        const fetchPricingData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/analytics/pricing`, {
                    method: "GET",
                    headers: { token: token },
                });
                const data = await response.json();
                const prices = data.pricing.map(item => item.price);
                const dates = data.pricing.map(item => item.date);

                setChartData({
                    series: [{
                        name: "Price",
                        data: prices
                    }],
                    categories: dates
                });
            } catch (error) {
                console.error('Error fetching pricing data:', error);
            }
        };

        fetchPricingData();
    }, []);

    useEffect(() => {
        if (chartData.series.length > 0) {
            const options = {
                series: chartData.series,
                chart: {
                    foreColor: "#9ba7b2",
                    height: 350,
                    type: 'line',
                    zoom: { enabled: false },
                },
                stroke: {
                    width: 2,
                    curve: 'smooth'
                },
                xaxis: {
                    categories: chartData.categories,
                    title: {
                        text: 'Date'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Price'
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

            const chart = new ApexCharts(document.querySelector("#pricing-chart"), options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, [chartData]);

    return (
        <>
            <div id="pricing-chart"></div>
        </>
    );
}

export default PricingChart;

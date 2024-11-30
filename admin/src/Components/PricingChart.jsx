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
                const dates = data.pricing.map(item => new Date(item.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                }));

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
                    height: 380,
                    type: 'bar',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: !1,
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#ffd200', '#00c6fb', '#7928ca'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        stops: [0, 100, 100, 100]
                    },
                },
                colors: ['#ff6a00', "#005bea", "#ff0080"],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 4,
                        borderRadiusApplication: 'around',
                        borderRadiusWhenStacked: 'last',
                        columnWidth: '45%',
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: !0,
                    width: 4,
                    colors: ["transparent"]
                },
                grid: {
                    show: true,
                    borderColor: 'rgba(0, 0, 0, 0.15)',
                    strokeDashArray: 4,
                },
                tooltip: {
                    theme: "dark",
                },
                xaxis: {
                    categories: chartData.categories,
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
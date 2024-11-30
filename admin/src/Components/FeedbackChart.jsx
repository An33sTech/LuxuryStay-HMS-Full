import React, { useEffect, useState } from 'react';

function FeedbackChart() {
    const [chartData, setChartData] = useState({
        series: [],
        labels: []
    });

    useEffect(() => {
        const fetchFeedbackData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }
                const startDate = '2024-11-22';
                const endDate = '2024-11-24';

                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reports/feedback?startDate=${startDate}&endDate=${endDate}`, {
                    method: "GET",
                    headers: { token: token },
                });

                const data = await response.json();

                const ratingDistribution = [12, 15, 24, 33, 34];
                data.feedbacks.forEach(feedback => {
                    if (feedback.rating >= 1 && feedback.rating <= 5) {
                        ratingDistribution[feedback.rating - 1]++;
                    }
                });

                setChartData({
                    series: ratingDistribution,
                    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']
                });

            } catch (error) {
                console.error('Error fetching feedback data:', error);
            }
        };

        fetchFeedbackData();
    }, []);

    useEffect(() => {
        if (chartData.series.length > 0) {
            const options = {
                series: chartData.series,
                chart: {
                    foreColor: "#9ba7b2",
                    height: 400,
                    type: 'pie',
                },
                labels: chartData.labels,
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#ee0979', '#17ad37', '#ec6ead', '#00c6fb', '#ff6a00'],
                        shadeIntensity: 1,
                        type: 'vertical',
                        opacityFrom: 1,
                        opacityTo: 1,
                    },
                },
                colors: ["#ff6a00", "#98ec2d", "#3494e6", "#005bea", "#ee0979"],
                legend: {
                    position: "bottom",
                    show: true,
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };

            const chart = new ApexCharts(document.querySelector("#feedback-chart"), options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, [chartData]);

    return (
        <>
            <div id="feedback-chart"></div>
        </>
    );
}

export default FeedbackChart;
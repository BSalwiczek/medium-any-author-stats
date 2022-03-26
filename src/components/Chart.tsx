import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Post } from "../types/Post";

interface StatisticsChartProps {
    posts: Post[],
    showClaps: boolean,
    showResponses: boolean,
    showClappers: boolean,
}


export function Chart(props: StatisticsChartProps)  {
    const getAvailableSeries = () => {
        const series = [];

        if (props.showClaps) {
            series.push({
                name: "Claps",
                data: props.posts.map((post) => post.claps)
            })
        }
        if (props.showResponses) {
            series.push({
                name: "Responses",
                data: props.posts.map((post) => post.responses)
            })
        }
        if (props.showClappers) {
            series.push({
                name: "Clappers",
                data: props.posts.map((post) => post.clappers)
            })
        }
        
        return series;
    }

    const [state, setState] = useState({
        series: getAvailableSeries(),
        options: {
            chart: {
                height: 220,
                width: '100%',
                type: 'line',
                zoom: {
                    enabled: true,
                    autoScaleYaxis: true
                }
            },
            stroke: {
                curve: 'straight'
            },
            markers: {
                size: 5,
            },
            legend: {
                position: 'top'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                title: {
                    text: "Posts in publishing order",
                    style: {
                        fontWeight: 600
                    }
                },
                tickAmount: 10,
                categories: props.posts.map((_, i) => i+1),
            },
            yaxis: {
                tickAmount: 5,
            },
            fill : {
                type: 'solid',
                opacity: 0.1
            },
            tooltip: {
                x: {
                    show: true,
                    formatter: function (index: number) {
                        const getPublishedDate = (memberSince: number): string => {
                            const date = new Date(memberSince);
                            var datestring = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
                            return datestring;
                        }
                        return props.posts[index-1].title + ' (' + getPublishedDate(props.posts[index-1].publishedAt) + ')';  
                    },
                },
            }
        },
    });

    useEffect(() => {
        setState({
            ...state,
            series: getAvailableSeries(),
        })
    }, [props.showClaps, props.showResponses, props.showClappers])

    return (
        <div id="chart">
            <ReactApexChart options={state.options as any} series={state.series} type="line" height={220} />
        </div>
    );
}

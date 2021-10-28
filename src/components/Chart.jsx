import React, {useEffect, useState} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import api from "../services/api";
import helper from '../util/helper';

const Chart = (props) => {

    const [dates, setDates] = useState([]);

    let number1 = Math.round(Math.random() * (props.days - 1) + 1);
    let number2 = number1 + parseInt(props.days);

    useEffect(() =>  {

        api.get("./data/dates.json")
            .then((response) => {
                setDates(response.data);
            } )
            .catch((err) => {
                console.error("ops! error: " + err);
            });

    }, []);

    const dataLine = {

        labels: dates.slice(number1,number2).map(function (date) { return date.date; }),
        datasets: [
            {
                label: 'Buy',
                data: helper.chartValues(props.days),
                fill: false,
                backgroundColor: 'yellow',
                borderColor: 'gold',
            },
            {
                label: 'Hold',
                data: helper.chartValues(props.days),
                fill: false,
                backgroundColor: 'red',
                borderColor: 'lightpink',
            },
            {
                label: 'Sell',
                data: helper.chartValues(props.days),
                fill: false,
                backgroundColor: 'green',
                borderColor: 'lightgreen',
            }
        ],
    };

    const optionsLine = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: props.title + ' (' + props.symbol + ')'
            }
        }
    };

    const dataBar = {
        labels: ['Buy', 'Hold', 'Sell'],
        datasets: [
            {
                label: '$ Price',
                data: [helper.chartBarValues(), helper.chartBarValues(), helper.chartBarValues()],
                backgroundColor: [
                    'gold',
                    'lightpink',
                    'lightgreen',
                ],
                borderColor: [
                    'yellow',
                    'red',
                    'green',
                ],
                borderWidth: 1,
            },
        ],
    };

    const optionsBar = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        plugins: {
            title: {
                display: true,
                text: props.title + ' (' + props.symbol + ')'
            }
        }
    };

    if (props.symbol !== "") {
        return (
            <div className="bg-white bg-white-bottom">
                <div  className="chart-div">
                    <Line data={dataLine} options={optionsLine} className="chart" />
                </div>
                <div  className="chart-div">
                    <Bar data={dataBar} options={optionsBar} className="chart" />
                </div>

            </div>
        )
    } else {
        return (
            <div className="bg-white bg-white-bottom"/>
        )
    }

}

export default Chart;
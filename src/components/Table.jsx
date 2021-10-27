import React from "react";
import api from "../services/api";

export default class Table extends React.Component {

    state = {
        dates: [],
    }

    componentDidMount() {
        api.get("./data/dates.json")
            .then((response) => {
                this.setState({dates: response.data})
            } )
            .catch((err) => {
                console.error("ops! error: " + err);
            });
    }

    render() {

        let social_media = [];
        let social_type;
        let prices  = [];
        let counts  = [];

        if (this.props.symbol === 'FBOK34') {
            social_media = 'Facebook Inc.';
            social_type = 'Facebook';
        } else if (this.props.symbol === 'GOGL34') {
            social_media = 'Alphabet Inc.';
            social_type = 'Google';
        } else if (this.props.symbol === 'TWTR34') {
            social_media = 'Twitter, Inc.';
            social_type = 'Twitter';
        } else if (this.props.symbol === 'P2IN34') {
            social_media = 'Pinterest, Inc.';
            social_type = 'Pinterest';
        }

        function randomDate(start, end) {
            start = new Date(2020, 1, 1);
            end = new Date();
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
        }

        const fetchData = (symbol, socialType) => {
            stockPriceGenerator(symbol, randomDate());
            socialMediaCountGenerator(symbol, socialType);
        }

        let number1 = Math.round(Math.random() * (this.props.days - 1) + 1);
        let number2 = number1 + parseInt(this.props.days);

        const { dates } = this.state

        const stockPriceGenerator = (symbol, date) => {
            dates.slice(number1,number2).map(date => (
                prices.push({'stock_price': Math.round(Math.random() * 100)})
            ));
        }

        const socialMediaCountGenerator = (symbol, socialType) => {
            dates.slice(number1,number2).map(date => (
                counts.push({'media_count': Math.round(Math.random() * 10)})
            ));
        }

        const recommendationAlgorithm = (stockPrice, socialCounts) => {
            if (this.props.algo !== 'all' && this.props.algo !== '')
                return this.props.algo;

            if (stockPrice > socialCounts*5)
                return 'sell'

            if (stockPrice < socialCounts*3)
                return 'buy'
                return 'hold'
        }

        if (this.props.symbol !== "") {

            fetchData(this.props.symbol, social_type);
            document.getElementById("algo").style.visibility = 'visible';
            document.getElementById("days").style.visibility = 'visible';

            return (
                <div>
                    <center>
                        <table>
                            <thead>
                                <tr>
                                    <th className="index">#</th>
                                    <th>social media</th>
                                    <th>symbol</th>
                                    <th>date</th>
                                    <th>price</th>
                                    <th>media count</th>
                                    <th>recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dates.slice(number1,number2).map((date,i) => (
                                    <tr key={i}>
                                        <td className="index">{i+1}</td>
                                        <td>
                                            {social_media}
                                        </td>
                                        <td>
                                            {this.props.symbol}
                                        </td>
                                        <td>
                                            {date.date}
                                        </td>
                                        <td>
                                            {prices[i].stock_price}
                                        </td>
                                        <td>
                                            {counts[i].media_count}
                                        </td>
                                        <td className={recommendationAlgorithm(prices[i].stock_price, counts[i].media_count)}>
                                            {recommendationAlgorithm(prices[i].stock_price, counts[i].media_count)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </center>
                </div>
            )

        } else {
            return (
                <h4>
                    choose your preferred social media network
                </h4>
            )
        }


    }

}
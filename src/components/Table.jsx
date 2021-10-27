import React from "react";
import api from "../services/api";

export default class Table extends React.Component {

    state = {
        dates: [],
        social_types: []
    }

    componentDidMount() {

        api.get("./data/dates.json")
            .then((response) => {
                this.setState({dates: response.data})
            } )
            .catch((err) => {
                console.error("ops! error: " + err);
            });

        api.get("./data/social_types.json")
            .then((response) => {
                this.setState({social_types: response.data})
            } )
            .catch((err) => {
                console.error("ops! error: " + err);
            });


    }


    render() {

        let { social_types } = this.state
        social_types = (social_types.filter(social => social.Symbol.includes(this.props.symbol)));

        let social_media = social_types.map(function (img) { return img['Media']; });
        let social_type = social_types.map(function (img) { return img['Type']; });
        let social_logo = social_types.map(function (img) { return img['Img']; });
        let prices  = [];
        let counts  = [];

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
                                            <img src={social_logo} width="24" alt={social_media + ' logo'} title={social_media} /> {social_media}
                                        </td>
                                        <td>
                                            {this.props.symbol}
                                        </td>
                                        <td>
                                            {date.date}
                                        </td>
                                        <td>
                                            $ {prices[i].stock_price}
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
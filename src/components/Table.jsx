import React, {useEffect, useState} from 'react';
import api from "../services/api";

const Table = (props) => {

    const [dates, setDates]                 = useState([]);
    const [social_media, setSocialMedia]    = useState('');
    const [social_type, setSocialType]      = useState('');
    const [social_logo, setSocialLogo]      = useState('');

    useEffect(() =>  {

        api.get("./data/dates.json")
            .then((response) => {
                setDates(response.data)

            } )
            .catch((err) => {
                console.error("ops! error: " + err);
            });

        api.get("./data/socials.json", { params: { symbol: props.symbol } })
            .then((response) => {
                const data = response.data.filter(social => social.Symbol.includes(props.symbol))
                setSocialMedia(data.map(function (img) { return img['Media']; }));
                setSocialType(data.map(function (img) { return img['Type']; }));
                setSocialLogo(data.map(function (img) { return img['Img']; }));
            } )
            .catch((err) => {
                console.error("ops! error: " + err);
            });

    }, [props]);

    if (props.symbol !== "") {

            let prices  = [];
            let counts  = [];

            const randomDate = (start, end) => {
                start = new Date(2020, 1, 1);
                end = new Date();
                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
            }

            const fetchData = (symbol, socialType) => {
                stockPriceGenerator(symbol, randomDate());
                socialMediaCountGenerator(symbol, socialType);
            }

            let number1 = Math.round(Math.random() * (props.days - 1) + 1);
            let number2 = number1 + parseInt(props.days);

            const socialMediaCountGenerator = (symbol, socialType) => {
                dates.slice(number1,number2).map(date => (
                    counts.push({'media_count': Math.round(Math.random() * 10)})
                ));
            }

            const recommendationAlgorithm = (stockPrice, socialCounts) => {
                if (props.algo !== 'all' && props.algo !== '')
                    return props.algo;

                if (stockPrice > socialCounts*5)
                    return 'sell'

                if (stockPrice < socialCounts*3)
                    return 'buy'
                return 'hold'
            }

            const stockPriceGenerator = (symbol, date) => {
                dates.slice(number1,number2).map(date => (
                    prices.push({'stock_price': Math.round(Math.random() * 100)})
                ));
            }

            document.getElementById("algo").style.visibility = 'visible';
            document.getElementById("days").style.visibility = 'visible';

            fetchData(props.symbol,social_type);

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
                                            {props.symbol}
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

export default Table;
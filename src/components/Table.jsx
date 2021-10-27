import React, {useEffect, useState} from 'react';
import api from "../services/api";
import helper from '../util/helper';

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

    let prices  = [];
    let counts  = [];

    let number1 = Math.round(Math.random() * (props.days - 1) + 1);
    let number2 = number1 + parseInt(props.days);

    const fetchData = (symbol, socialType) => {
        helper.stockPriceGenerator(symbol, dates, prices, number1, number2);
        helper.socialMediaCountGenerator(symbol, socialType, dates, counts, number1, number2);
    }

    if (props.symbol !== "") {

            document.getElementById("algo").style.visibility = 'visible';
            document.getElementById("days").style.visibility = 'visible';

            fetchData(props.symbol,social_type);

            return (
                <div className="bg-white bg-white-top">
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
                                        <td className={helper.recommendationAlgorithm(prices[i].stock_price, counts[i].media_count, props.algo)}>
                                            {helper.recommendationAlgorithm(prices[i].stock_price, counts[i].media_count, props.algo)}
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
                <div className="bg-white bg-white-top">
                    <h4>
                        choose your preferred social media network
                    </h4>
                </div>
            )
        }


}

export default Table;
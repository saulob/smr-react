export default class helper {

    static stockPriceGenerator = (symbol, dates, prices, number1, number2) => {
        dates.slice(number1,number2).map(date => (
            prices.push({'stock_price': Math.round(Math.random() * 100)})
        ));
    }

    static socialMediaCountGenerator = (symbol, socialType, dates, counts, number1, number2) => {
        dates.slice(number1,number2).map(date => (
            counts.push({'media_count': Math.round(Math.random() * 10)})
        ));
    }

    static recommendationAlgorithm = (stockPrice, socialCounts, algo) => {
        if (algo !== 'all' && algo !== '')
            return algo;

        if (stockPrice > socialCounts*5)
            return 'sell'

        if (stockPrice < socialCounts*3)
            return 'buy'
        return 'hold'
    }

}
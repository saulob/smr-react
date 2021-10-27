import React from 'react'

export default class Form extends React.Component {

    constructor(props) {
        super();
        this.state = {
            symbol: '',
            algo: '',
        };
    }

    render() {

        const callSymbol = (symbol) => {
            this.setState({
                symbol: symbol,
            });

            this.props.changeSymbol(symbol);
        }

        const callAlgo = (algo) => {
            this.setState({
                algo: algo,
            });

            this.props.changeAlgo(algo);
        }

        return (
            <div>
                <div>
                    <button onClick={() => callSymbol('FBOK34')}>
                        Facebook
                    </button>
                    <button onClick={() => callSymbol('GOGL34')}>
                        Google
                    </button>
                    <button onClick={() => callSymbol('TWTR34')}>
                        Twitter
                    </button>
                </div>
                <div>
                    <button onClick={() => callAlgo('all')}>
                        All
                    </button>
                    <button onClick={() => callAlgo('buy')}>
                        Buy
                    </button>
                    <button onClick={() => callAlgo('hold')}>
                        Hold
                    </button>
                    <button onClick={() => callAlgo('sell')}>
                        Sell
                    </button>
                </div>
            </div>
        )
    }

}


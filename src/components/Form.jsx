import React from 'react'

export default class Form extends React.Component {

    constructor(props) {
        super();
        this.state = {
            days: 10,
            symbol: '',
            algo: '',
        };
    }

    callDays(event) {
        this.setState({
            days: event.target.value
        });

        this.props.changeDays(event.target.value);
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
                <div>
                    Days:
                    <select name="time_window" defaultValue={'10'} onChange={(event) => this.callDays(event)} >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        )
    }

}


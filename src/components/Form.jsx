import React from 'react'
// import logoFbk from 'public/images/facebook.png'
// import logoTwt from 'public/images/twitter.png'
// import logoGlg from 'public/images/google.jpg'

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
                    <button className="btn btn-logo" onClick={() => callSymbol('FBOK34')}>
                        <img src='./images/facebook.png' alt="facebook logo" />
                    </button>
                    <button className="btn btn-logo"  onClick={() => callSymbol('GOGL34')}>
                        <img src='./images/google.png'  alt="google logo" />
                    </button>
                    <button className="btn btn-logo"  onClick={() => callSymbol('TWTR34')}>
                        <img src='./images/twitter.png'  alt="twitter logo" />
                    </button>
                </div>
                <div>
                    <button className="btn btn-white" onClick={() => callAlgo('all')}>
                        All
                    </button>
                    <button className="btn btn-yellow" onClick={() => callAlgo('buy')}>
                        Buy
                    </button>
                    <button className="btn btn-red" onClick={() => callAlgo('hold')}>
                        Hold
                    </button>
                    <button className="btn btn-green" onClick={() => callAlgo('sell')}>
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

